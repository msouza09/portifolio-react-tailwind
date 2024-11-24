import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <div className={isDarkTheme ? "dark" : ""}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Home sDarkTheme={isDarkTheme} />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}


export default App