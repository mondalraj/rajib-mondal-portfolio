import TimelineItem from "./TimelineItem"
import '../timeline.css'

function Timeline() {

    const data = [
        {
            name: "Junior Front-End Developer Internship",
            company: "Sightless",
            description: "I have developed the responsive front-end part of the ecommerce website, and also integrated the stripe payment gateway in it.",
            date: "Oct'2020 - Feb'2021"
        },
        {
            name: "Open Source Contribution",
            company: "GirlScript Summer of Code",
            description: "I Have paricipated in GSSOC'21 and it was my first open source experience, I have created a lot of connections there, meet a lot of like minded individuals.",
            date: "Mar'2021 - May'2021"
        },
        {
            name: "GDSC Core Team Member",
            company: "Google Student Developer Club' ADGITM",
            description: "Based on my Front-End skills I was selected for the Core technical Team where we build projects with other members, organise events on regular basis to increase the coding culture of our college.",
        },
        {
            name: "Hacktoberfest Contribution",
            company: "Digital Ocean",
            description: "I have successfully merged 10+ Pull Requests and have contributed in 5 projects where I have tried to make their product more optized and useful.",
            date: "Oct'2021",
            link: {
                url: "https://dev.to/mondalraj",
                text: "See Badge"
            }
        }
    ]

    return (
        <>
            <div id="experience" className="pt-20 text-xl text-yellow-400 mb-5 z-5 text-center">My Expertise</div>
            <div className="timeline-container text-white flex flex-col justify-center items-center max-w-screen-lg mx-auto min-h-screen relative p-5 ">

                {data.map((data, index) => (
                    <TimelineItem data={data} key={index} />
                ))}


            </div>
        </>
    )
}

export default Timeline
