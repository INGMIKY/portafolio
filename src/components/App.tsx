import "../styles/App.css";
import logo from "../assets/img/logo2.png";
import Header from "./Header.tsx";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Stack from "./Stack.tsx";
const App = () => {
  return (
    <>
      <span className="glow"></span>
      <Header />
      <main className="sectionContainer">
        <Home />
        <About />
        <Projects />
        <Stack />
      </main>
    </>
  );
};

export default App;
