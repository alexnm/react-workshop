import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../ducks/productDetails";
import { Api } from "../../utilities";

const loadProduct = Api.get( fetchProduct );

const { func, shape, number, string } = React.PropTypes;

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
        fetchProduct: func.isRequired,
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
        const { product } = this.props;
        return (
            <div>
                <h1>Product Details!</h1>
                <h2>{ product.name }</h2>
                <img className="product-image" src={ product.imageUrl } alt={ product.name } />
                <p>Price: { product.price } €</p>
                <p>Description: { product.description }</p>
            </div>
        );
    },
} );

const mapStateToProps = ( state ) => ( {
    product: state.selectedProduct,
} );

const mapDispatchToProps = ( dispatch ) => ( {
    fetchProduct: ( id ) => dispatch( loadProduct( { id } ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( ProductDetails );
