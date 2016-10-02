import React from "react";
import { Link } from "react-router";
import Dictionary from "../../../dictionary";

const CartItem = ( { item, index, onRemoveItem } ) => (
    <div className="cart-item">
        <Link to={ `/products/${ item.id }` }>
            { item.name }
        </Link> - <span>{ item.price }</span>
        <span className="link" onClick={ ( ) => onRemoveItem( index ) }>{ Dictionary.cart.remove }</span>
    </div>
);

const { shape, string, number, func } = React.PropTypes;
CartItem.propTypes = {
    item: shape( {
        id: number.isRequired,
        name: string.isRequired,
        price: number.isRequired,
    } ),
    index: number.isRequired,
    onRemoveItem: func.isRequired,
};

export default CartItem;
