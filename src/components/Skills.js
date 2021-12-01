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
            name: "React js",
            power: 90
        },
        {
            name: "Next js",
            power: 80
        },
        {
            name: "Node js",
            power: 70
        },
        {
            name: "Express js",
            power: 60
        },
        {
            name: "Mongo DB",
            power: 75
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
    return (
        <div id="skills" className="max-w-screen-xl mx-auto min-h-screen text-white p-5 pt-20 flex justify-center items-center flex-col md:gap-10 md:p-10">
            <div className="text-xl text-yellow-400 tracking-wider mb-4">My Skills</div>
            <div className="skills-content flex flex-col justify-center items-center w-full gap-4 md:flex-row md:gap-10">
                <div className="core-technical-skills w-full p-5 rounded" style={{ backgroundColor: "#171717" }}>
                    <div className="text-center text-lg tracking-wide">Core Techical Skills</div>

                    {coreTechnicalSkills.map((skill) => {
                        return (
                            <div className="core-technical-skills-bar w-full flex flex-col py-1.5">
                                <div className="skill-details flex justify-between py-1 tracking-wide">
                                    <div>{skill.name}</div>
                                    <div>{skill.power}%</div>
                                </div>
                                <div className="skill-bar w-full h-1.5 rounded bg-black">
                                    <div className="skill-percent h-full bg-yellow-400 rounded" style={{ width: `${skill.power}%` }}></div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="additional-skills w-full p-5 rounded" style={{ backgroundColor: "#171717" }}>
                    <div className="text-center text-lg tracking-wide">Additional Skills</div>

                    {additionalSkills.map((skill) => {
                        return (
                            <div className="core-technical-skills-bar w-full flex flex-col py-1.5">
                                <div className="skill-details flex justify-between py-1 tracking-wide">
                                    <div>{skill.name}</div>
                                    <div>{skill.power}%</div>
                                </div>
                                <div className="skill-bar w-full h-1.5 rounded bg-black">
                                    <div className="skill-percent h-full bg-yellow-400 rounded" style={{ width: `${skill.power}%` }}></div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default Skills
