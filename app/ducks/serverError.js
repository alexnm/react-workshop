import { createReducer } from "./utilities";

const initialState = "";

export default createReducer( initialState )( {
    LOGIN_FAILED: ( state, payload ) => payload.message,
} );
