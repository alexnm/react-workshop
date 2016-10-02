import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../ducks/productDetails";
import { addToCart } from "../../ducks/cart";
import { Api } from "../../utilities";
import Dictionary from "../../dictionary";

const loadProduct = Api.get( fetchProduct );

const { bool, func, shape, number, string } = React.PropTypes;

const ProductDetails = React.createClass( {
    propTypes: {
        params: React.PropTypes.object,
        product: shape( {
            id: number,
            name: string,
            price: number,
            description: string,
            imageUrl: string,
        } ),
        isAuthenticated: bool.isRequired,
        fetchProduct: func.isRequired,
        onAddToCart: func.isRequired,
    },

    statics: {
        prerequisites: ( { params } ) => loadProduct( { id: params.id } ),
    },

    componentDidMount( ) {
        if ( this.props.product.id !== parseInt( this.props.params.id, 10 ) ) {
            this.props.fetchProduct( this.props.params.id );
        }
    },

    render( ) {
        const { product, isAuthenticated, onAddToCart } = this.props;
        return (
            <div>
                <h1>Product Details!</h1>
                <h2>{ product.name }</h2>
                <img className="product-image" src={ product.imageUrl } alt={ product.name } />
                <p>Price: { product.price } €</p>
                <p>Description: { product.description }</p>
                { isAuthenticated &&
                    <span className="link" onClick={ ( ) => onAddToCart( product ) }>
                        { Dictionary.cart.add }
                    </span>
                }
            </div>
        );
    },
} );

const mapStateToProps = ( state ) => ( {
    product: state.selectedProduct,
    isAuthenticated: state.session.isAuthenticated,
} );

const mapDispatchToProps = ( dispatch ) => ( {
    onAddToCart: ( product ) => dispatch( addToCart( product ) ),
    fetchProduct: ( id ) => dispatch( loadProduct( { id } ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( ProductDetails );
