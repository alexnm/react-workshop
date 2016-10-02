import Cookies from "js-cookie";

const set = ( name, value ) => Cookies.set( name, value );
const get = ( name ) => Cookies.get( name );
const remove = ( name ) => Cookies.remove( name );

export default {
    set,
    get,
    remove,
};
