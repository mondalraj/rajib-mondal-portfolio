import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../styles/about.css'

const squareVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 }
};

function About() {

    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants} id="about" className="container about-container max-w-screen-xl mx-auto flex justify-center items-center min-h-screen text-white flex-col-reverse p-5 pt-40 md:flex-row md:gap-10 md:p-10">
            <div className="service-tags w-full flex flex-col gap-2 py-6">
                <div className="services-blocks flex flex-col justify-center items-center w-full h-20 rounded" style={{ backgroundColor: "#171717" }}>
                    <div className="text-xl font-semibold tracking-wide text-yellow-400">Design</div>
                    <div className="text-lg tracking-wide px-3 text-center">I can create aesthetic web designs</div>
                </div>
                <div className="services-blocks flex flex-col justify-center items-center w-full h-20 rounded" style={{ backgroundColor: "#171717" }}>
                    <div className="text-xl font-semibold tracking-wide text-yellow-400">Front - End</div>
                    <div className="text-lg tracking-wide px-3 text-center">I can build responsive websites efficiently</div>
                </div>
                <div className="services-blocks flex flex-col justify-center items-center w-full h-full rounded py-3" style={{ backgroundColor: "#171717" }}>
                    <div className="text-xl font-semibold tracking-wide text-yellow-400">Back - End</div>
                    <div className="text-lg tracking-wide px-3 text-center">I can code back-end logic pf website i.e. server, database, api's</div>
                </div>
                <div className="services-blocks flex flex-col justify-center items-center w-full py-3 h-auto rounded" style={{ backgroundColor: "#171717" }}>
                    <div className="text-xl font-semibold tracking-wide text-yellow-400">Deploy</div>
                    <div className="text-lg tracking-wide px-3 text-center">I can deploy websites to the server, so that whole world can see your website live</div>
                </div>
            </div>
            <div className="description flex flex-col items-center md:items-start space-y-5">
                <div className="text-xl text-yellow-400 animate-pulse">About Me</div>
                <div className="text-3xl font-semibold tracking-wide">Hi! I am Rajib Mondal</div>
                <div className="text-justify text-lg md:leading-7">
                    <p>I am a Full Stack Developer and currently pursuing my Bachelor's of Technology Degree from Dr. Akhilesh Das Gupta Institute of Technology And Management, Delhi.</p>
                    <p>I have participated and won in a lot of Open Source Programs, Hackathons, and have built responsive and fast web apps.</p>
                    <p>I am very passionate learner and love to implement my learnings in my projects.</p>
                </div>
            </div>
        </motion.div>
    )
}
export default About
