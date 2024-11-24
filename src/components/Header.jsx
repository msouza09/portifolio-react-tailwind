import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <header className="bg-purpleTheme-dark text-white shadow-md fixed w-full z-10 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Matheus Souza</h1>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-purpleTheme-dark cursor-pointer"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-purpleTheme-dark cursor-pointer"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-purpleTheme-dark cursor-pointer"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          <button
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className={`px-4 py-2 rounded-md transition-all flex items-center justify-center
                ${isDarkTheme ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-purple-500 hover:bg-purple-400 text-white'}`}>
              <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} className="text-lg" />
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
