import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white text-purpleTheme-dark py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Sobre Mim</h2>
        <p className="text-lg leading-relaxed mb-6">
        Sou um desenvolvedor front-end júnior, aprendendo React, com foco em criar interfaces funcionais e intuitivas. 
        Estou em constante aprendizado e busco enfrentar novos desafios em projetos inovadores.
        </p>
      </div>
      <div>
        <div>
          <ul className="grid grid-cols-2 gap-4 max-w-5xl mx-auto px-4">
            <li className="bg-purple-100 p-4 rounded-lg shadow-md">HTML</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md">CSS</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md">JavaScript</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md">React</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md">Tailwind CSS</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md">Bootstrap</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
