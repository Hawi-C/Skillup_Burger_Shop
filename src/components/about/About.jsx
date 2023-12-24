// Write all the code here
// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";

function About() {
    return (
        <div className="about-page">
            <h1>About Us</h1>

            <article>
                <h4>Burger Shop</h4>
                <p>
                    This is Burger Shop. The place for the most tasty burgers on the
                    entire earth.
                </p>
                <p>
                    Explore the various types of food and burgers. Click below to see the
                    menu.
                </p>
                <Link to="/menu"><RiFindReplaceLine /> View Menu</Link>
            </article>

            <div className="founder-section">
                <h2>Founder</h2>
                <article>
                    <div className="founder-info">
                        <img src={me} alt="Founder" />
                        <h3>Nelson</h3>
                    </div>
                    <p>
                        I am Nelson, the founder of Burger Shop. Affiliated to
                        God Taste...
                    </p>
                </article>
            </div>
        </div>
    );
}

export default About;
