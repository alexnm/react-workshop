import { Cookies } from "../utilities";

const storeAuthToken = store => next => action => {
    const oldToken = store.getState( ).session.token;
    const result = next( action );
    const newToken = store.getState( ).session.token;
    if ( oldToken !== newToken ) {
        if ( newToken ) {
            Cookies.set( "token", newToken );
        } else {
            Cookies.remove( "token" );
        }
    }

    return result;
};

export default storeAuthToken;
