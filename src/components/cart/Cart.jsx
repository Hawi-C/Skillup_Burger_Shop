import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import CartItem from "./CartItem"; 

function Cart() {
  const [itemQuantities, setItemQuantities] = useState({ 1: 0, 2: 0, 3: 0 });

  const increment = (itemId) => {
    if (itemQuantities[itemId] < 10) {
      setItemQuantities({
        ...itemQuantities,
        [itemId]: itemQuantities[itemId] + 1
      });
    }
  };

  const decrement = (itemId) => {
    if (itemQuantities[itemId] > 0) {
      setItemQuantities({
        ...itemQuantities,
        [itemId]: itemQuantities[itemId] - 1
      });
    }
  };

  return (
    <section>
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={itemQuantities[1]}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={itemQuantities[2]}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={itemQuantities[3]}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>





      </main>
    </section>
  );
}

export default Cart;
