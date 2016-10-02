import { createReducer, createAsyncAction } from "./utilities";

const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_COMPLETED = "GET_PRODUCT_COMPLETED";

const mapResponseToPayload = ( response ) => ( {
    product: response.product,
} );

const urlMapper = ( params ) => `/products/${ params.id }`;
export const fetchProduct = createAsyncAction( GET_PRODUCT, urlMapper, mapResponseToPayload );

const initialState = { };

export default createReducer( initialState )( {
    [ GET_PRODUCT ]: ( ) => initialState,
    [ GET_PRODUCT_COMPLETED ]: ( state, payload ) => payload.product,
} );
