import React, { useEffect, useRef, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com'
import '../styles/contact.css'

const squareVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 200 }
};

function Contact() {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const [emailField, setEmailField] = useState('');
    const [messageField, setMessageField] = useState('');

    const emailInput = useRef();
    const messageInput = useRef();
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_o8kyvkr', 'template_86htrws', e.target, 'user_Ne3ZYCjoIJybtjQLJDref').then(res => {
            setEmailField('')
            setMessageField('')
            alert("Your message has been successfully sent.")
        }).catch(err => {
            console.log(err)
            alert("There was error in sending the message, Try again later!")
        });
    }
    return (
        <motion.div ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants} id="contact" className="container contact-container max-w-screen-xl mx-auto flex justify-center items-center min-h-screen text-white p-5 pt-40">
            <div className="get-in-touch w-full p-5 rounded-md md:max-w-3xl" style={{ backgroundColor: "#171717" }}>
                <div className="text-yellow-400 text-2xl md:text-3xl font-semibold tracking-wide pb-4 animate-pulse">Get In Touch!</div>
                <div className="text-lg">
                    <p>Have an enquiry or feedback for me?</p>
                    <p>Fill out the form below to contact me.</p>
                </div>
                <div className="contact-form relative -bottom-10 rounded p-5" style={{ backgroundColor: "#CDCDCD" }}>
                    <form onSubmit={sendEmail}>
                        <label className="text-md text-black " htmlFor="email">Mail <br /></label>
                        <input ref={emailInput} className="contactForm-input w-full rounded p-2 mt-1 mb-3 text-gray-800" type="email" name="email" id="email" placeholder="Type your Email" value={emailField} onChange={(e) => setEmailField(e.target.value)} required />
                        <br />
                        <label className="text-md text-black " htmlFor="message">Message <br /></label>
                        <textarea ref={messageInput} className="contactForm-input w-full rounded p-2 mt-1 text-gray-800" name="message" id="message" cols="30" rows="10" placeholder="Type your Message..." value={messageField} onChange={(e) => setMessageField(e.target.value)} required></textarea>
                        <input className="contactForm-submit bg-yellow-400 cursor-pointer mt-2 w-full rounded text-lg text-black p-2 px-5 " type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
