// Write all the code here
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic to handle the form submission here
        console.log(`Email: ${email}, Message: ${message}`);
        // Reset the form fields
        setEmail('');
        setMessage('');
        // Open the popup
        setOpen(true);
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>

            <Popup open={open} closeOnDocumentClick onClose={closeModal} modal>
                <div className="modal">
                    <a className="close" onClick={closeModal}>
                        &times;
                    </a>
                    <p>Your message has been sent!</p>
                </div>
            </Popup>
        </div>
    );
}

export default Contact;
