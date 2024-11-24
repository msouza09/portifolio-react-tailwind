import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { SiTailwindcss } from 'react-icons/si';

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
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px]"><FontAwesomeIcon icon={faHtml5} className="text-[19px] mr-1"/> HTML</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px]"><FontAwesomeIcon icon={faCss} className="text-[19px] mr-1"/> CSS</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px]"><FontAwesomeIcon icon={faJs} className="text-[19px] mr-1"/>  JavaScript</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px]"><FontAwesomeIcon icon={faReact} className="text-[19px] mr-1"/> React</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] flex items-center"><SiTailwindcss className="text-[19px] mr-2" />Tailwind CSS</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px]"><FontAwesomeIcon icon={faBootstrap} className="text-[19px] mr-1"/> Bootstrap</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
