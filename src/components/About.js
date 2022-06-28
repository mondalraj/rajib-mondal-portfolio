import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/about.css";

const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200 },
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
    <>
      <div id="about"></div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className="container about-container max-w-screen-xl mx-auto flex justify-center items-center min-h-screen text-white flex-col-reverse p-5 pt-20 md:flex-row md:gap-10 md:p-10"
      >
        <div className="service-tags w-full flex flex-col gap-2 py-6">
          <div
            className="services-blocks flex flex-col justify-center items-center w-full h-20 rounded"
            style={{ backgroundColor: "#171717" }}
          >
            <div className="text-xl font-semibold tracking-wide text-yellow-400">
              Frontend
            </div>
            <div className="text-lg tracking-wide px-3 text-center">
              I can build responsive websites efficiently
            </div>
          </div>
          <div
            className="services-blocks flex flex-col justify-center items-center w-full h-full rounded py-3"
            style={{ backgroundColor: "#171717" }}
          >
            <div className="text-xl font-semibold tracking-wide text-yellow-400">
              Backend
            </div>
            <div className="text-lg tracking-wide px-3 text-center">
              I can code back-end logic pf website i.e. server, database, api's
            </div>
          </div>
          <div
            className="services-blocks flex flex-col justify-center items-center w-full h-20 rounded"
            style={{ backgroundColor: "#171717" }}
          >
            <div className="text-xl font-semibold tracking-wide text-yellow-400">
              Smart Contracts
            </div>
            <div className="text-lg tracking-wide px-3 text-center">
              I can develop dapps, DeFi on blockchain protocols
            </div>
          </div>
          <div
            className="services-blocks flex flex-col justify-center items-center w-full py-3 h-auto rounded"
            style={{ backgroundColor: "#171717" }}
          >
            <div className="text-xl font-semibold tracking-wide text-yellow-400">
              Deploy
            </div>
            <div className="text-lg tracking-wide px-3 text-center">
              I can deploy websites to the server, so that whole world can see
              your website live
            </div>
          </div>
        </div>
        <div className="description flex flex-col items-center md:items-start space-y-5">
          <div className="text-xl text-yellow-400 animate-pulse">About Me</div>
          <div className="text-3xl font-semibold tracking-wide">
            Hi! I am Rajib Mondal
          </div>
          <div className="text-justify text-lg md:leading-7">
            <p>
              Hi 👋, I'm a{" "}
              <span className="text-yellow-400">
                Young Tech Explorer from India
              </span>{" "}
              who loves to try out different domains of technology existing on
              the planet.
            </p>
            <p>
              I'm currently working as a{" "}
              <span className="text-yellow-400">Software Developer</span> at
              Simply Jet.
            </p>
            <p>
              I have <span className="text-yellow-400">Mentored</span> 100+
              students in their Full Stack Web Development journey at The 10x
              Academy.
            </p>
            <p>
              I’m looking to{" "}
              <span className="text-yellow-400">Collaborate</span> on any
              PROJECT which solves any real-life problem.
            </p>
            <p>
              I love to <span className="text-yellow-400">read</span> books,
              blogs and watch videos related to{" "}
              <span className="text-yellow-400">
                astrophysics & space technology
              </span>
              .
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1K7V1CeCR3uehrmOAzJEuo5HNgolfqhS7/view?usp=sharing"
            className=" view-resume text-lg font-semibold bg-gray-300 py-1 px-4 text-black rounded"
            target="_blank"
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </>
  );
}
export default About;
