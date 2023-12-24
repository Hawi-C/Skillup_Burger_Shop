// Write all the code here
// Write all the code here
import React from 'react';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

function Footer() {
    return (
        <footer>
            <div className="social-media-bar">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <AiFillYoutube size={30} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size={30} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
