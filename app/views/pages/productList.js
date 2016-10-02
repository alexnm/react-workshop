import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { fetchProducts } from "../../ducks/productList";
import { Api } from "../../utilities";
import { ProductEntry } from "../components/product";

const loadProducts = Api.get( fetchProducts );

const { arrayOf, func, object } = React.PropTypes;

const ProductList = React.createClass( {
    propTypes: {
        products: arrayOf( object ).isRequired,
        dispatch: func.isRequired,
    },

    statics: {
        prerequisites: loadProducts,
    },

    componentDidMount( ) {
        if ( this.props.products.length === 0 ) {
            this.props.dispatch( loadProducts( ) );
        }
    },

    render( ) {
        const products = this.props.products;
        return (
            <div>
                <Helmet title="Fresh food!" />
                <h1>Product List!</h1>
                { products.map( ( product, index ) => (
                    <ProductEntry product={ product } key={ index } />
                ) ) }
            </div>
        );
    },
} );

const mapStateToProps = ( state ) => ( {
    products: state.products,
} );

export default connect( mapStateToProps )( ProductList );
