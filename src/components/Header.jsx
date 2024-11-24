import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-purpleTheme-dark text-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Matheus Souza</h1>
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
      </div>
    </header>
  );
};

export default Header;
