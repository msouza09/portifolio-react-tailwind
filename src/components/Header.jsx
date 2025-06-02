import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-50 dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Nome / Logo */}
        <h1 className="text-2xl font-bold text-greenTheme dark:text-greenTheme">Matheus Souza</h1>

        {/* Navegação */}
        <nav className="hidden md:flex gap-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-700 dark:text-gray-300 hover:text-greenTheme cursor-pointer transition"
          >
            Sobre
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-gray-700 dark:text-gray-300 hover:text-greenTheme cursor-pointer transition"
          >
            Projetos
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-700 dark:text-gray-300 hover:text-greenTheme cursor-pointer transition"
          >
            Contato
          </Link>
        </nav>

        {/* Botão de Tema */}
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="ml-4 px-3 py-2 rounded-md text-white bg-greenTheme hover:bg-greenThemeDark transition"
          aria-label="Alternar tema"
        >
          <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
        </button>
      </div>
    </header>
  );
};

export default Header;
