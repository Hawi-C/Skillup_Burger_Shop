import React from "react";
function CartItem({ title, img, value, increment, decrement }) {
    return (
        <div className="cart-item">
            <img src={img} alt={title} style={{ width: '100px' }} />
            <h5>{title}</h5>
            <div>
                <button onClick={decrement}>-</button>
                <span>{value}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default CartItem;
