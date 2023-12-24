// Write all the code here
// Write all the code here
import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

function Home() {
    const containerVariants = {
        hidden: { opacity: 0, x: '100vw' },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } }
    };

    return (
        <motion.div 
            className="home-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <section className="founder-section">
                <Founder />
            </section>

            <section className="menu-section">
                <Menu />
            </section>
        </motion.div>
    );
}

export default Home;







