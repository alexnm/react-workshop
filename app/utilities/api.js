import fetch from "./fetch";
import Notification from "./notification";
import { apiCallStarted, apiCallEnded } from "../ducks/busy";

const apiCall = ( method ) => ( action ) => ( params, body ) => ( dispatch ) => {
    const baseUrl = getBaseUrl( );
    const url = `${ baseUrl }${ action.urlMapper( params ) }`;
    dispatch( action.started );
    dispatch( apiCallStarted );
    return fetch( url, method, body ).then(
        res => handleResponse( res, action, dispatch ),
        err => handleError( err, action, dispatch )
    );
};

function getBaseUrl( ) {
    return typeof document === "undefined" ? "http://localhost:1234/api" : "/api";
}

function handleResponse( response, action, dispatch ) {
    dispatch( apiCallEnded );
    dispatch( action.completed( response ) );
}

function handleError( { status, response }, action, dispatch ) {
    dispatch( apiCallEnded );
    dispatch( action.failed( response ) );
    dispatch( Notification.error( response.error ) );
}

export default {
    get: apiCall( "GET" ),
    delete: apiCall( "DELETE" ),
    post: apiCall( "POST" ),
    put: apiCall( "PUT" ),
};
