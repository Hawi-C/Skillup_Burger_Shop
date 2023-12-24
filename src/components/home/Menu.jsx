// Write all the code here
// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

function Menu() {
    const menuItems = [
        { id: 1, title: "Classic Burger", image: burger1, price: "$5.99" },
        { id: 2, title: "Cheese Burger", image: burger2, price: "$6.99" },
        { id: 3, title: "Veggie Burger", image: burger3, price: "$4.99" }
    ];

    const handleAddToCart = (itemId) => {
        console.log("Added to cart:", itemId);
    };

    return (
        <div className="menu">
            {menuItems.map((item, index) => (
                <MenuCard
                    key={item.id}
                    itemNumber={item.id}
                    title={item.title}
                    imageSrc={item.image}
                    price={item.price}
                    onAddToCart={() => handleAddToCart(item.id)}
                    animationDelay={`${index * 0.2}s`} // Delay increases with each item
                />
            ))}
        </div>
    );
}

export default Menu;
