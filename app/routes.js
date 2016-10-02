import React from "react";
import { IndexRoute, Route, Redirect } from "react-router";
import { Home, Login, NotFound, ProductList } from "./views/pages";
import Layout from "./views/layouts/layout";
import { setRedirectAfterLogin } from "./ducks/session";

export default function createRoutes( dispatch ) {
    const setRedirectUrl = ( prevState, nextState ) => {
        const oldUrl = prevState.location.pathname;
        const newUrl = nextState.location.pathname;

        if ( nextState.location.action === "PUSH" && newUrl === "/login" ) {
            dispatch( setRedirectAfterLogin( oldUrl ) );
        }
    };

    return (
        <Route path="/" component={ Layout } onChange={ setRedirectUrl }>
            <IndexRoute component={ Home } />
            <Redirect from="/old-url" to="/products" />
            <Route path="/login" component={ Login } />
            <Route path="/products" component={ ProductList } />
            <Route path="/*" component={ NotFound } />
        </Route>
    );
}
