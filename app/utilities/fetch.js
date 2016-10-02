import { default as isomorphicFetch } from "isomorphic-fetch";

const SUCCESS = 200;
const REDIRECT = 300;

export default ( url, method, body ) => {
    const options = {
        method,
        headers: requestHeaders( ),
        body: method !== "GET" ? JSON.stringify( body ) : null,
    };

    return isomorphicFetch( url, options )
        .then( res => parseStatus( res.status, res.json() ) );
};

function parseStatus( status, res ) {
    return new Promise( ( resolve, reject ) => {
        if ( status >= SUCCESS && status < REDIRECT ) {
            res.then( response => resolve( response ) );
        } else {
            res.then( response => reject( { status, response } ) );
        }
    } );
}

function requestHeaders( ) {
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
    };
}
