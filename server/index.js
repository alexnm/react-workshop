import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import React from "react";
import { renderToString } from "react-dom/server";
import { RouterContext, match } from "react-router";
import { Provider } from "react-redux";
import Helmet from "react-helmet";

import apiRoutes from "./apiRoutes";
import createRoutes from "../app/routes";
import configureStore from "../app/store";
import { initializeSession } from "../app/ducks/session";

const app = express( );

app.use( bodyParser.json( ) );
app.use( cookieParser( ) );
app.use( "/favicon.ico", express.static( "favicon.ico" ) );
app.use( "/dist", express.static( "dist" ) );

app.use( "/api", apiRoutes );

app.use( ( req, res ) => {
    const store = configureStore( );
    const routes = createRoutes( store.dispatch );

    const token = req.cookies.token;
    if ( token ) {
        store.dispatch( initializeSession( token ) );
    }

    match( { routes, location: req.url }, ( error, redirect, props ) => {
        if ( error ) {
            res.status( 500 ).end( error.message );
            return;
        }

        if ( redirect ) {
            res.redirect( 302, redirect.pathname + redirect.search );
            return;
        }

        fetchDataForComponents( props, store ).then( ( ) => {
            const head = Helmet.rewind( );
            const initialState = store.getState( );
            const reactDom = renderToString(
                <Provider store={ store }>
                    <RouterContext { ...props } />
                </Provider>
            );

            res.set( "Content-Type", "text/html" )
               .status( 200 )
               .end( renderPage( reactDom, head, initialState ) );
        } );
    } );
} );

function renderPage( reactDom, head, initialState ) {
    return `
        <!doctype html>
        <html>
            <head>
                ${ head.title.toString( ) }
                ${ head.meta.toString( ) }
                ${ head.link.toString( ) }
                <link rel="stylesheet" href="/dist/style.css"/>
            </head>
            <body>
                <div id="react-root">${ reactDom }</div>
                <script>
                    window.INITIAL_STATE = ${ JSON.stringify( initialState ) };
                </script>
                <script type="text/javascript" src="/dist/bundle.js"></script>
            </body>
        </html>
    `;
}

function fetchDataForComponents( renderProps, store ) {
    const promises = renderProps.components
                                .filter( comp => comp.prerequisites )
                                .map( comp => store.dispatch( comp.prerequisites( renderProps ) ) );

    return Promise.all( promises );
}

app.listen( 1234, ( err ) => {
    if ( !err ) {
        console.log( "App started on port 1234" ); // eslint-disable-line
    }
} );
