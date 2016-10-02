import { createReducer } from "./utilities";

const DISMISS_NOTIFICATION = "DISMISS_NOTIFICATION";
const PUSH_NOTIFICATION = "PUSH_NOTIFICATION";

export const pushNotification = ( type, text ) => ( {
    type: PUSH_NOTIFICATION,
    payload: {
        type,
        text,
    },
} );

export const dismissNotification = ( id ) => ( {
    type: DISMISS_NOTIFICATION,
    payload: {
        id,
    },
} );

const initialState = [ ];

export default createReducer( initialState )( {
    [ PUSH_NOTIFICATION ]: ( state, payload ) => [ ...state, payload ],
    [ DISMISS_NOTIFICATION ]: ( state, payload ) => {
        const index = state.map( n => n.id ).indexOf( payload.id );
        return [
            ...state.slice( 0, index ),
            ...state.slice( index + 1 ),
        ];
    },
} );
