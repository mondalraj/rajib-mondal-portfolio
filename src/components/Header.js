import { motion } from "framer-motion";
import "../styles/header.css";
function Header() {
  return (
    <>
      <div className="container p-5 header-container max-w-screen-xl mx-auto flex justify-center items-center -m-20 md:-mt-16 min-h-screen text-white flex-col-reverse md:flex-row">
        <motion.div
          initial={{ x: "-100px", opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="header-content md:pl-10 flex flex-col items-center md:items-start space-y-5"
        >
          <div className="text-lg lg:text-xl text-black bg-yellow-400 w-max py-0.5 px-4 rounded">
            Full Stack Blockchain Developer
          </div>
          <div className="flex md:flex-col lg:flex-row">
            <div className="text-2xl md:text-5xl font-semibold w-max">
              Also a Software&#160;
            </div>
            <div className="text-2xl md:text-5xl font-semibold text-yellow-400 typewriter">
              {" "}
              Engineer.
            </div>
          </div>

          <div className="text-lg md:text-xl w-5/6 tracking-wider leading-7 md:pt-5 pb-2 md:text-left text-justify">
            I can Design Awesome Websites, Build REST APIs, write Optimized and
            Clean Code, and write Smart Contracts in for your Web3 Applications.
          </div>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/dev-rajib-mondal/"
              target="_blank"
              style={styles.headerButton}
              className="header-links p-15 flex items-center mr-8 rounded"
            >
              <img
                className="h-6 pr-3"
                src="https://img.icons8.com/ios-glyphs/50/ffffff/linkedin-circled.png"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/mondalraj"
              target="_blank"
              style={styles.headerButton}
              className="header-links flex items-center rounded"
            >
              <img
                className="h-6 pr-3"
                src="https://img.icons8.com/material-outlined/50/ffffff/github.png"
              />
              Github
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100px", opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="header-image relative -mt-3 w-9/12 sm:w-3/5 md:w-full"
        >
          <img
            style={{ width: "800px" }}
            src="heroImage.png"
            alt="Image of Rajib Mondal"
          />
        </motion.div>
      </div>
      <div className="flex justify-center items-center animate-bounce mt-3">
        <img
          className=""
          src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-down-arrows-those-icons-fill-those-icons-1.png"
        />
      </div>
    </>
  );
}

const styles = {
  headerButton: {
    backgroundColor: "#171717",
    padding: 8,
    paddingRight: 30,
    paddingLeft: 30,
    fontSize: 18,
  },
};

export default Header;
