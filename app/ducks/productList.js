import { createReducer, createAsyncAction } from "./utilities";

const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_COMPLETED = "GET_PRODUCTS_COMPLETED";

const mapResponseToPayload = ( response ) => ( {
    products: response.products,
} );

const urlMapper = ( ) => "/products/";
export const fetchProducts = createAsyncAction( GET_PRODUCTS, urlMapper, mapResponseToPayload );

const initialState = [ ];

export default createReducer( initialState )( {
    [ GET_PRODUCTS_COMPLETED ]: ( state, payload ) => payload.products,
} );
