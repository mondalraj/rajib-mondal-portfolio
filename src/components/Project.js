import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/project.css";
import ProjectItem from "./ProjectItem";

const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200 },
};

function Project() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [projectType, setProjectType] = useState("frontend");
  const [miniSeleted, setMiniSelected] = useState("bg-gray-200");
  const [frontendSeleted, setFrontendSelected] = useState("bg-yellow-400");
  const [fullstackSeleted, setFullstackSelected] = useState("bg-gray-200");

  const projectList = [
    {
      name: "Code Monks App (Hackathon)",
      tags: ["React js", "Bootstrap", "Gatsby", "Node js"],
      level: "Intermediate",
      links: {
        github: "https://github.com/mondalraj/Code-Monks",
        live: "https://codemonks.netlify.app/",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/code-monks.png?raw=true",
      },
      type: "fullstack",
    },
    {
      name: "Devshowcase",
      tags: [
        "NextJS",
        "Tailwind CSS",
        "Node js",
        "Cloudinary API",
        "Google Cloud API",
      ],
      level: "Pro",
      links: {
        github: "https://github.com/mondalraj/devshowcase",
        live: "https://devshowcase-22.vercel.app/",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/devshowcase.png?raw=true",
      },
      type: "fullstack",
    },
    {
      name: "DSC ADGITM Website",
      tags: ["React js", "Bootstrap", "Gatsby", "Framer Motion"],
      level: "Intermediate",
      links: {
        github: "https://github.com/mondalraj/dsc-adgitm-website",
        live: "https://dsc-adgitm.web.app/",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/dsc-adgitm.png?raw=true",
      },
      type: "frontend",
    },
    {
      name: "Mojlo App (Movies/TV shows listing website)",
      tags: ["Next js", "React js", "Tailwind CSS"],
      level: "Intermediate",
      links: {
        github: "https://github.com/mondalraj/mojlo-app",
        live: "http://mojlo-app.vercel.app/",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/mojlo-app.png?raw=true",
      },
      type: "frontend",
    },
    {
      name: "Animated Image Slider",
      tags: ["HTML", "CSS", "JavaScript"],
      level: "Easy",
      links: {
        github: "https://github.com/mondalraj/image-slider",
        live: "https://mondalraj.github.io/image-slider/",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/image-slider.png?raw=true",
      },
      type: "mini",
    },
    {
      name: "Booklist App",
      tags: ["HTML", "CSS", "JavaScript"],
      level: "Intermediate",
      links: {
        github: "https://github.com/mondalraj/My-booklist-App",
        live: "https://mondalraj.github.io/My-booklist-App/",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/my-booklist-app.png?raw=true",
      },
      type: "mini",
    },
    {
      name: "Windows 11 Clone",
      tags: ["HTML", "CSS", "JavaScript"],
      level: "Easy",
      links: {
        github: "https://github.com/mondalraj/Windows-11-home-screen-clone",
        live: "",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/windows11.png?raw=true",
      },
      type: "mini",
    },
    {
      name: "Animated Expanding Cards",
      tags: ["HTML", "CSS", "JavaScript"],
      level: "Easy",
      links: {
        github:
          "https://github.com/mondalraj/FrontEnd-Mini-Projects/tree/master/Animated%20Expanding%20Cards",
        live: "",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/expanding-cards.png?raw=true",
      },
      type: "mini",
    },
    {
      name: "Netflix Clone (HomePage)",
      tags: ["React js", "Axios", "Firebase"],
      level: "Intermediate",
      links: {
        github: "https://github.com/mondalraj/netflix-clone",
        live: "https://clone-projects-ec1aa.web.app/",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/netflix-clone.png?raw=true",
      },
      type: "frontend",
    },

    {
      name: "SiteMania Landing Page",
      tags: ["HTML", "CSS"],
      level: "Easy",
      links: {
        github: "https://github.com/mondalraj/sitemania.github.io",
        live: "https://mondalraj.github.io/sitemania.github.io/",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/sitemania.png?raw=true",
      },
      type: "mini",
    },
    {
      name: "Animated CSS Grid Tiles",
      tags: ["HTML", "CSS"],
      level: "Easy",
      links: {
        github:
          "https://github.com/mondalraj/Ultimate-Roadmap-for-Front-end-dev",
        live: "https://mondalraj.github.io/Ultimate-Roadmap-for-Front-end-dev/",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/animated-cssgrid-tiles.png?raw=true",
      },
      type: "mini",
    },
    {
      name: "Tour and Travel Website",
      tags: ["HTML", "CSS", "JavaScript"],
      level: "Intermediate",
      links: {
        github: "https://github.com/mondalraj/tour-travel-website",
        live: "",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/tour-travel-website.png?raw=true",
      },
      type: "mini",
    },
    {
      name: "Portfolio Website",
      tags: ["React js", "CSS", "Tailwind CSS", "Framer Motion"],
      level: "Intermediate",
      links: {
        github: "",
        live: "https://mondalraj.github.io/rajib-mondal-portfolio/",
        image:
          "https://github.com/mondalraj/portfolio-project-images/blob/master/portfolio-website.png?raw=true",
      },
      type: "frontend",
    },
  ];
  return (
    <>
      <div id="projects"></div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className="container project-container max-w-screen-xl mx-auto flex flex-col justify-center items-center min-h-screen text-white p-5 pt-20"
      >
        <div className="text-xl text-yellow-400 mb-8 animate-pulse">
          My Projects
        </div>
        <div className="project-filter flex flex-wrap justify-center items-center gap-3 text-black text-lg mb-5">
          <div
            className={
              miniSeleted + " py-2 px-5 rounded font-semibold cursor-pointer"
            }
            onClick={(e) => {
              setProjectType("mini");
              setFrontendSelected("bg-gray-200");
              setFullstackSelected("bg-gray-200");
              setMiniSelected("bg-yellow-400");
            }}
          >
            Mini
          </div>
          <div
            className={
              frontendSeleted +
              " py-2 px-5 rounded font-semibold cursor-pointer"
            }
            onClick={(e) => {
              setProjectType("frontend");
              setFrontendSelected("bg-yellow-400");
              setFullstackSelected("bg-gray-200");
              setMiniSelected("bg-gray-200");
            }}
          >
            Front-End
          </div>
          <div
            className={
              fullstackSeleted +
              " py-2 px-5 rounded font-semibold cursor-pointer"
            }
            onClick={(e) => {
              setProjectType("fullstack");
              setFrontendSelected("bg-gray-200");
              setFullstackSelected("bg-yellow-400");
              setMiniSelected("bg-gray-200");
            }}
          >
            Full Stack
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
          {projectList
            .filter((data) => {
              return data.type == projectType;
            })
            .map((data, index) => {
              return <ProjectItem data={data} key={index} />;
            })}
        </div>
      </motion.div>
    </>
  );
}

export default Project;
