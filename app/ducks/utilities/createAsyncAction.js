const defaultErrorMap = ( response ) => ( {
    message: response.error,
} );

export default ( type, urlMapper, mapResponseToPayload, mapErrorToMessage = defaultErrorMap ) => ( {
    name: type,
    urlMapper,
    started: {
        type,
    },
    completed: ( response ) => ( {
        type: `${ type }_COMPLETED`,
        payload: mapResponseToPayload( response ),
    } ),
    failed: ( response ) => ( {
        type: `${ type }_FAILED`,
        payload: mapErrorToMessage( response ),
    } ),
} );
