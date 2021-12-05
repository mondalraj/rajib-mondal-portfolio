import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../styles/project.css'
import ProjectItem from "./ProjectItem"

const squareVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 200 }
};

function Project() {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const [projectType, setProjectType] = useState("mini");
    const [miniSeleted, setMiniSelected] = useState("bg-yellow-400")
    const [frontendSeleted, setFrontendSelected] = useState("bg-gray-200")
    const [fullstackSeleted, setFullstackSelected] = useState("bg-gray-200")

    const projectList = [
        {
            name: "Portfolio Website",
            tags: ["React js", "CSS", "Tailwind CSS", "Framer Motion"],
            level: "Intermediate",
            links: {
                github: "https://github.com/mondalraj/rajib-mondal-portfolio",
                live: "",
                image: ""
            },
            type: "frontend"
        },
        {
            name: "Code Monks App (Hackathon)",
            tags: ["React js", "Bootstrap", "Gatsby", "Node js"],
            level: "Intermediate",
            links: {
                github: "https://github.com/mondalraj/Code-Monks",
                live: "",
                image: ""
            },
            type: "frontend"
        },
        {
            name: "DSC ADGITM Website",
            tags: ["React js", "Bootstrap", "Gatsby", "Framer Motion"],
            level: "Intermediate",
            links: {
                github: "https://github.com/mondalraj/dsc-adgitm-website",
                live: "https://dsc-adgitm.web.app/",
                image: ""
            },
            type: "frontend"
        },
        {
            name: "Mojlo App (Movies/TV shows listing website)",
            tags: ["Next js", "React js", "Tailwind CSS"],
            level: "Intermediate",
            links: {
                github: "https://github.com/mondalraj/mojlo-app",
                live: "",
                image: ""
            },
            type: "frontend"
        },
        {
            name: "Animated Image Slider",
            tags: ["HTML", "CSS", "JavaScript"],
            level: "Easy",
            links: {
                github: "https://github.com/mondalraj/image-slider",
                live: "https://mondalraj.github.io/image-slider/",
                image: ""
            },
            type: "mini"
        },
        {
            name: "Booklist App",
            tags: ["HTML", "CSS", "JavaScript"],
            level: "Intermediate",
            links: {
                github: "https://github.com/mondalraj/My-booklist-App",
                live: "",
                image: ""
            },
            type: "mini"
        },
        {
            name: "Windows 11 Clone",
            tags: ["HTML", "CSS", "JavaScript"],
            level: "Easy",
            links: {
                github: "https://github.com/mondalraj/Windows-11-home-screen-clone",
                live: "",
                image: ""
            },
            type: "mini"
        },
        {
            name: "Animated Expanding Cards",
            tags: ["HTML", "CSS", "JavaScript"],
            level: "Easy",
            links: {
                github: "https://github.com/mondalraj/FrontEnd-Mini-Projects/tree/master/Animated%20Expanding%20Cards",
                live: "",
                image: ""
            },
            type: "mini"
        },
        {
            name: "Netflix Clone (HomePage)",
            tags: ["React js", "Axios", "Firebase"],
            level: "Intermediate",
            links: {
                github: "https://github.com/mondalraj/netflix-clone",
                live: "https://clone-projects-ec1aa.web.app/",
                image: ""
            },
            type: "frontend"
        },
        {
            name: "SiteMania Landing Page",
            tags: ["HTML", "CSS"],
            level: "Easy",
            links: {
                github: "https://github.com/mondalraj/sitemania.github.io",
                live: "",
                image: ""
            },
            type: "mini"
        },
        {
            name: "Animated CSS Grid Tiles",
            tags: ["HTML", "CSS"],
            level: "Easy",
            links: {
                github: "https://github.com/mondalraj/Ultimate-Roadmap-for-Front-end-dev",
                live: "",
                image: ""
            },
            type: "mini"
        },

    ]
    return (
        <motion.div ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants} id="projects" className="container project-container max-w-screen-xl mx-auto flex flex-col justify-center items-center min-h-screen text-white p-5 pt-40">
            <div className="text-xl text-yellow-400 mb-8 animate-pulse">My Projects</div>
            <div className="project-filter flex flex-wrap justify-center items-center gap-3 text-black text-lg mb-5">
                <div className={miniSeleted + " py-2 px-5 rounded font-semibold cursor-pointer"} onClick={(e) => {
                    setProjectType("mini")
                    setFrontendSelected("bg-gray-200")
                    setFullstackSelected("bg-gray-200")
                    setMiniSelected("bg-yellow-400")
                }
                }>Mini</div>
                <div className={frontendSeleted + " py-2 px-5 rounded font-semibold cursor-pointer"} onClick={(e) => {
                    setProjectType("frontend")
                    setFrontendSelected("bg-yellow-400")
                    setFullstackSelected("bg-gray-200")
                    setMiniSelected("bg-gray-200")
                }}>Front-End</div>
                <div className={fullstackSeleted + " py-2 px-5 rounded font-semibold cursor-pointer"} onClick={(e) => {
                    setProjectType("fullstack")
                    setFrontendSelected("bg-gray-200")
                    setFullstackSelected("bg-yellow-400")
                    setMiniSelected("bg-gray-200")
                }}>Full Stack</div>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
                {projectList.filter((data) => {
                    return data.type == projectType
                }).map((data, index) => {
                    return <ProjectItem data={data} key={index} />
                })
                }
            </div>

        </motion.div >
    )
}

export default Project
