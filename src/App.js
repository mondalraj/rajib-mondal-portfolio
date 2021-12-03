import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="App">
      {/* "homepage": "https://mondalraj.github.io/rajib-mondal-portfolio", */}
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;
