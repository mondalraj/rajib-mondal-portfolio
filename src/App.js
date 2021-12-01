import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      {/* "homepage": "https://mondalraj.github.io/rajib-mondal-portfolio", */}
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
