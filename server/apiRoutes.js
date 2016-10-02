import { Router } from "express";
import data from "./apiData.json";

const router = new Router();

router.get( "/products", ( req, res ) => {
    setTimeout( ( ) => res.json( { products: data.products.map( productOverview ) } ), 500 );
} );

router.get( "/products/:id", ( req, res ) => {
    const product = data.products.filter( p => p.id.toString( ) === req.params.id )[ 0 ];
    setTimeout( ( ) => res.json( { product } ), 500 );
} );

router.post( "/login", ( req, res ) => {
    setTimeout( ( ) => {
        if ( req.body.username === "user" && req.body.password === "secret" ) {
            return res.json( { success: true, token: "1111-2222-3333-4444" } );
        }

        return res.status( 401 ).json( { success: false, error: "Invalid credentials" } );
    }, 500 );
} );

function productOverview( product ) {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
    };
}

export default router;
