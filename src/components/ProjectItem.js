const ProjectItem = ({ data }) => {
    return (
        <div className="group project-item rounded flex flex-col p-3 w-full sm:w-96 mb-3" style={{ backgroundColor: "#171717" }}>
            <div className="project-image w-full relative h-60 rounded" style={{ backgroundImage: "url(" + data.links.image + ")" }}>
                <div className="project-image-layer w-full h-full bg-transparent group-hover:bg-black opacity-60 rounded transition-all duration-300 "></div>
                <div className="project-links flex opacity-0 absolute top-1/2 left-1/2 gap-5 transition-opacity duration-300" style={{ transform: 'translate(-50%, -50%)' }}>
                    {data.links.github && <a className="p-2 bg-gray-200 rounded-full" href={data.links.github} target="_blank"><img className="w-10" src="https://img.icons8.com/ios-glyphs/50/000000/github.png" /></a>}

                    {data.links.live && <a className="p-2 bg-gray-200 rounded-full" href={data.links.live} target="_blank"><img className="w-10" src="https://img.icons8.com/ios-filled/50/000000/youtube-live.png" /></a>}
                </div>
                <div className="absolute top-0 right-0 p-1 bg-yellow-400 text-black rounded">{data.level}</div>
            </div>
            <div className="text-yellow-400 text-lg font-semibold  my-1">{data.name}</div>
            <div className="tags flex flex-wrap gap-2">
                {data.tags.map((tag) => {
                    return <div className="bg-gray-200 w-max text-black font-semibold text-md py-0.5 px-1.5 rounded">{tag}</div>
                })}
            </div>
        </div>
    )
}

export default ProjectItem
