import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons'
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"; 
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { SiTailwindcss } from 'react-icons/si';
import { faCogs, faClipboardCheck, faBug } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about" className="bg-white text-purpleTheme-dark py-16 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center dark:text-white">Sobre Mim</h2>
        <p className="text-lg leading-relaxed mb-6 dark:text-white">
        Sou um Desenvolvedor Front-End Júnior, explorando React com foco em criar interfaces funcionais e intuitivas. Também atuo como QA, planejando, executando e desenvolvendo testes para garantir qualidade. Estou sempre aprendendo e buscando novos desafios em projetos inovadores.
        </p>
      </div>
      <div>
        <div>
          <ul className="grid grid-cols-2 gap-4 max-w-5xl mx-auto px-4">
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg"><FontAwesomeIcon icon={faHtml5} className="text-[19px] mr-1"/> HTML</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg"><FontAwesomeIcon icon={faCss} className="text-[19px] mr-1"/> CSS</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg"><FontAwesomeIcon icon={faJs} className="text-[19px] mr-1"/>  JavaScript</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg"><FontAwesomeIcon icon={faReact} className="text-[19px] mr-1"/> React</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg flex items-center"><SiTailwindcss className="text-[19px] mr-2" />Tailwind CSS</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg"><FontAwesomeIcon icon={faBootstrap} className="text-[19px] mr-1"/> Bootstrap</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg"><FontAwesomeIcon icon={faClipboardList} className="text-[19px] mr-1"/> Planejamento de Testes</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg"><FontAwesomeIcon icon={faCogs} className="text-[19px] mr-1"/> Automação de Testes</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg"><FontAwesomeIcon icon={faClipboardCheck} className="text-[19px] mr-1"/> Execução de Testes</li>
            <li className="bg-purple-100 p-4 rounded-lg shadow-md text-[19px] dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg"><FontAwesomeIcon icon={faBug} className="text-[19px] mr-1"/> Gestão de Bugs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
