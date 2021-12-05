import React, { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../styles/skills.css'

function Skills() {
    const coreTechnicalSkills = [
        {
            name: "HTML/CSS",
            power: 80
        },
        {
            name: "JavaScript",
            power: 70
        },
        {
            name: "React.js",
            power: 90
        },
        {
            name: "Next.js",
            power: 80
        },
        {
            name: "Node.js",
            power: 60
        },
        {
            name: "Express.js",
            power: 50
        },
        {
            name: "Mongo DB",
            power: 55
        },
    ]
    const additionalSkills = [
        {
            name: "Git/Github",
            power: 75
        },
        {
            name: "Sass",
            power: 70
        },
        {
            name: "Tailwind CSS",
            power: 90
        },
        {
            name: "Gatsby",
            power: 70
        },
        {
            name: "Firebase",
            power: 70
        },
        {
            name: "Java",
            power: 85
        },
        {
            name: "C++",
            power: 60
        },
        {
            name: "Data Structures & Algorithms",
            power: 80
        }
    ]

    const squareVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 200 },

    };

    const controls = useAnimation();
    const skillAnimation = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
            skillAnimation.start("skillBar")
        }
    }, [controls, inView]);


    return (
        <>
            <div id="skills"></div>
            <motion.div ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants} className="container max-w-screen-xl mx-auto min-h-screen text-white p-5 pt-20 flex justify-center items-center flex-col md:gap-10 md:p-10">
                <div className="text-xl text-yellow-400 tracking-wider mb-4 animate-pulse">My Skills</div>
                <div className="skills-content flex flex-col justify-center items-center w-full gap-4 md:flex-row md:gap-10">
                    <div className="core-technical-skills w-full p-5 rounded" style={{ backgroundColor: "#171717" }}>
                        <div className="text-center text-lg tracking-wide font-semibold">Core Techical Skills</div>

                        {coreTechnicalSkills.map((skill) => {
                            const skillVariant = {
                                skillBar: { width: `${skill.power}%` }
                            }
                            return (
                                <div className="core-technical-skills-bar w-full flex flex-col py-1.5">
                                    <div className="skill-details flex justify-between py-1 tracking-wide">
                                        <div>{skill.name}</div>
                                        <div className="text-gray-400">{skill.power}%</div>
                                    </div>
                                    <div className="skill-bar w-full h-2.5 rounded bg-white">


                                        <motion.div initial={{ width: 0 }} animate={skillAnimation}
                                            variants={skillVariant} transition={{ delay: 0.5, duration: 3 }} className="skill-percent h-full bg-yellow-400 rounded "
                                        ></motion.div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="additional-skills w-full p-5 rounded" style={{ backgroundColor: "#171717" }}>
                        <div className="text-center text-lg tracking-wide font-semibold">Additional Skills</div>

                        {additionalSkills.map((skill) => {
                            const skillVariant = {
                                skillBar: { width: `${skill.power}%` }
                            }
                            return (
                                <div className="core-technical-skills-bar w-full flex flex-col py-1.5">
                                    <div className="skill-details flex justify-between py-1 tracking-wide">
                                        <div>{skill.name}</div>
                                        <div className="text-gray-400">{skill.power}%</div>
                                    </div>
                                    <div className="skill-bar w-full h-2.5 rounded bg-white">
                                        <motion.div initial={{ width: 0 }} animate={skillAnimation}
                                            variants={skillVariant} transition={{ delay: 0.5, duration: 3 }} className="skill-percent h-full bg-yellow-400 rounded " style={{
                                                maxWidth: `${skill.power}%`
                                            }}></motion.div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </motion.div >
        </>
    )
}

export default Skills
