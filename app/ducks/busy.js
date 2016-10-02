import { createReducer } from "./utilities";

const API_CALL_STARTED = "API_CALL_STARTED";
const API_CALL_ENDED = "API_CALL_ENDED";

export const apiCallStarted = { type: API_CALL_STARTED };
export const apiCallEnded = { type: API_CALL_ENDED };

const initialState = 0;

export default createReducer( initialState )( {
    [ API_CALL_STARTED ]: state => state + 1,
    [ API_CALL_ENDED ]: state => state - 1,
} );
