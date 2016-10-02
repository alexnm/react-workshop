const loadCart = ( ) => {
    const serializedCart = localStorage.getItem( "cart" );
    if ( !serializedCart ) {
        return null;
    }

    return JSON.parse( serializedCart );
};

const saveCart = ( cart ) => {
    const serializedCart = JSON.stringify( cart );
    localStorage.setItem( "cart", serializedCart );
};

export default {
    loadCart,
    saveCart,
};
