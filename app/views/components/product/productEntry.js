import React from "react";

const ProductEntry = ( { product } ) => (
    <div className="product-box">
        <img className="product-image" src={ product.imageUrl } alt={ product.name } />
        { product.name } - <span>{ product.price } €</span>
    </div>
);

const { shape, string, number } = React.PropTypes;
ProductEntry.propTypes = {
    product: shape( {
        id: number.isRequired,
        imageUrl: string.isRequired,
        name: string.isRequired,
        price: string.price,
    } ),
};

export default ProductEntry;
