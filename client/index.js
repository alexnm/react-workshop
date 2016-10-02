import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import createRoutes from "../app/routes";
import configureStore from "../app/store";
import { Cookies } from "../app/utilities";
import { initializeSession } from "../app/ducks/session";

const store = configureStore( window.INITIAL_STATE );
const routes = createRoutes( store.dispatch );

const rootHtml = (
    <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>
);

render( rootHtml, document.getElementById( "react-root" ) );

const token = Cookies.get( "token" );
if ( token ) {
    store.dispatch( initializeSession( token ) );
}
