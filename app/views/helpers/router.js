import { browserHistory } from "react-router";

let redirectUrl = "";

export default {
    redirectTo( url ) {
        if ( typeof document === "undefined" ) {
            redirectUrl = url;
        } else {
            browserHistory.push( url );
        }
    },

    getRedirectUrl( ) {
        return redirectUrl;
    },

    clearRedirectUrl( ) {
        redirectUrl = "";
    },
};
