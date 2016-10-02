import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import createRoutes from "../app/routes";
import configureStore from "../app/store";

const store = configureStore( window.INITIAL_STATE );
const routes = createRoutes( store.dispatch );

const rootHtml = (
    <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>
);

render( rootHtml, document.getElementById( "react-root" ) );
