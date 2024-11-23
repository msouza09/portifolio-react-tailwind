import React from 'react';

const Header = () => {
  return (
    <header className="bg-purpleTheme-dark text-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Matheus Souza</h1>
        <nav>
        <ul className="flex gap-4">
          <li><a href="#about" className="text-white hover:text-purpleTheme-dark">Sobre</a></li>
          <li><a href="#projects" className="text-white hover:text-purpleTheme-dark">Projetos</a></li>
          <li><a href="#contact" className="text-white hover:text-purpleTheme-dark">Contato</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
