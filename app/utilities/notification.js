import { pushNotification, dismissNotification } from "../ducks/notifications";

export const notification = ( type ) => ( text, timeout = 3000 ) => ( dispatch ) => {
    const notificationObj = pushNotification( type, text );
    dispatch( notificationObj );
    setTimeout( ( ) => dispatch( dismissNotification( notificationObj.id ) ), timeout );
};

export default {
    info: notification( "info" ),
    warning: notification( "warning" ),
    error: notification( "error" ),
};
