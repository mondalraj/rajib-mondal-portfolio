import { useState } from "react"
import '../styles/project.css'
import ProjectItem from "./ProjectItem"

function Project() {

    const [projectType, setProjectType] = useState("mini");
    const [miniSeleted, setMiniSelected] = useState("bg-yellow-400")
    const [frontendSeleted, setFrontendSelected] = useState("bg-gray-200")
    const [fullstackSeleted, setFullstackSelected] = useState("bg-gray-200")

    const projectList = [
        {
            name: "Name",
            tags: ["HTML", "CSS", "JavaScript", "Node js", "Express js"],
            level: "Beginner",
            links: {
                github: "https://github.com/mondalraj",
                live: "https://github.com/mondalraj",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg"
            },
            type: "mini"
        },
        {
            name: "Name",
            tags: ["HTML", "CSS", "JS"],
            level: "Beginner",
            links: {
                github: "https://github.com/mondalraj",
                live: "https://github.com/mondalraj",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_9aygpXkD5LyNmv6RBs4L-sh6rD6PjrsxeNm6hNzIeZy7v9s13VOXuXaILRq5eND3cQ&usqp=CAU"
            },
            type: "frontend"
        },
        {
            name: "Name",
            tags: ["HTML", "JavaScript"],
            level: "Beginner",
            links: {
                github: "https://github.com/mondalraj",
                live: "https://github.com/mondalraj",
                image: ""
            },
            type: "frontend"
        },
        {
            name: "Name",
            tags: ["React", "JavaScript"],
            level: "Beginner",
            links: {
                github: "https://github.com/mondalraj",
                live: "https://github.com/mondalraj",
                image: ""
            },
            type: "fullstack"
        },
        {
            name: "Name",
            tags: ["MERN"],
            level: "Beginner",
            links: {
                github: "https://github.com/mondalraj",
                live: "https://github.com/mondalraj",
                image: "https://pmtips.net/Portals/0/EasyDNNNews/1921/700600p546EDNmainimg-5-basic-roles-in-project-management.jpg"
            },
            type: "mini"
        },
        {
            name: "Name",
            tags: ["Python"],
            level: "Beginner",
            links: {
                github: "https://github.com/mondalraj",
                live: "https://github.com/mondalraj",
                image: ""
            },
            type: "fullstack"
        },
    ]
    return (
        <div id="projects" className="container project-container max-w-screen-xl mx-auto flex flex-col justify-center items-center min-h-screen text-white p-5 pt-20">
            <div className="text-xl text-yellow-400 mb-8">My Projects</div>
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

        </div >
    )
}

export default Project
