// Write all the code here
// Write all the code here
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';


function NavBar() {
    return (
        <nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Link to="/"><IoFastFoodOutline /> Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/cart"><FiShoppingCart /> Cart</Link>

                <DropdownMenu title={<FaUser />}>
                    <Link to="/login"><FiLogIn /> Login</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/logout">Logout</Link>
                </DropdownMenu>
            </motion.div>
        </nav>
    );
}

export default NavBar;
