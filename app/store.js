import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { storeAuthToken } from "./middlewares";
import { busy, notifications, products, serverError, session } from "./ducks";

export default function configureStore( initialState ) {
    const loggerMiddleware = createLogger( );

    let devTools;
    try {
        devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
    } catch ( e ) {
        devTools = f => f;
    }

    const store = createStore(
        combineReducers( {
            busy,
            notifications,
            products,
            serverError,
            session,
            initialState,
        } ),
        compose(
            applyMiddleware(
                loggerMiddleware,
                thunkMiddleware,
                storeAuthToken
            ),
            devTools
        )
    );

    return store;
}
