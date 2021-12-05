import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rajib Mondal | Portfolio</title>
        <meta name="description" content="Online Portfolio website of Rajib Mondal, a web developer." />
      </Helmet>
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
