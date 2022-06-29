import TimelineItem from "./TimelineItem";
import "../styles/timeline.css";

function Timeline() {
  const data = [
    {
      name: "Software Developer",
      company: "Simply Jet",
      description:
        "Working on Simply Jet website, modifying and enhancing their UI/UX and implement some backend features for user and admin dashboard using Python and solved some bugs.",
      date: "Mar'2022 - Present",
    },
    {
      name: "Full Stack Developer",
      company: "DataPitcher",
      description:
        "Worked as MERN developer. Developed a full-fledged Authentication System. Integrated Send Grid API to send emails to clients on their first signup. Implemented Razorpay Payment Gateway to accept payments from clients. Developed Light Weight UI and Complex Animations using Tailwind CSS.",
      date: "Dec'2021 - Mar'2022",
    },
    {
      name: "Full Stack Developer Mentor",
      company: "The 10x Academy",
      description:
        "Solved doubts related to ReactJS, NodeJS, ExpressJS, MongoDB, DSA, and Problem Solving. Taught students about effective communication skills.",
      date: "Nov'2021 - Apr'2022",
    },
    {
      name: "Junior Front-End Developer Internship",
      company: "Sightless",
      description:
        "I have developed the responsive front-end part of the ecommerce website, and also integrated the stripe payment gateway in it.",
      date: "Oct'2020 - Feb'2021",
    },
    {
      name: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      description:
        "I Have participated in GSSOC'21 and it was my first open source experience, I have created a lot of connections there, meet a lot of like-minded individuals.",
      date: "Mar'2021 - May'2021",
    },
    {
      name: "GDSC Core Team Member",
      company: "Google Student Developer Club' ADGITM",
      description:
        "Based on my Front-End skills I was selected for the Core technical Team where we build projects with other members, organize events on regular basis to increase the coding culture of our college.",
      date: "Sept'2021 - Present",
    },
    {
      name: "Hacktoberfest Contributor",
      company: "Digital Ocean",
      description:
        "I have successfully merged 10+ Pull Requests and have contributed in 5 projects where I have tried to make their product more optimized and useful.",
      date: "Oct'2021",
      link: {
        url: "https://dev.to/mondalraj",
        text: "See Badge",
      },
    },
  ];

  return (
    <>
      <div
        id="experience"
        className="pt-20 text-xl text-yellow-400 mb-5 z-5 text-center animate-pulse"
      >
        My Expertise
      </div>
      <div className="container timeline-container text-white flex flex-col justify-center items-center max-w-screen-lg mx-auto min-h-screen relative p-5 ">
        {data.map((data, index) => (
          <TimelineItem data={data} key={index} />
        ))}
      </div>
    </>
  );
}

export default Timeline;
