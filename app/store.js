import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { storeAuthToken } from "./middlewares";
import { busy, notifications, products, selectedProduct, serverError, session } from "./ducks";

export default function configureStore( initialState ) {
    const loggerMiddleware = createLogger( );

    const createStoreWithMiddleware = applyMiddleware(
        loggerMiddleware,
        thunkMiddleware,
        storeAuthToken
    )( createStore );

    const combinedReducer = combineReducers( {
        busy,
        notifications,
        products,
        selectedProduct,
        serverError,
        session,
    } );

    return createStoreWithMiddleware( combinedReducer, initialState );
}
