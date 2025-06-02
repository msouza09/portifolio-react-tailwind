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
      <div className="min-h-screen bg-white text-textDark dark:bg-grayThemeDark dark:text-white font-outfit transition-colors duration-300 overflow-x-hidden">
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <main>
          <Home isDarkTheme={isDarkTheme} />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
