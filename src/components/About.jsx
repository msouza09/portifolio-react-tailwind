import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardList,
  faCogs,
  faClipboardCheck,
  faBug,
  faSearch,
  faFlagCheckered
} from '@fortawesome/free-solid-svg-icons';

const skills = [
  { icon: faClipboardList, label: 'Planejamento de Testes' },
  { icon: faClipboardCheck, label: 'Execução de Testes' },
  { icon: faCogs, label: 'Automação (Selenium / Cypress)' },
  { icon: faBug, label: 'Gestão e Reporte de Bugs' },
  { icon: faSearch, label: 'Testes Exploratórios' },
  { icon: faFlagCheckered, label: 'Validação de Critérios de Aceite' }
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-grayThemeDark py-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Sobre Mim
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Sou um QA Júnior comprometido com a entrega de software funcional, estável e com
          excelente experiência. Atuo com testes manuais e automatizados, sempre focado em
          agregar valor ao produto, detectar falhas e melhorar continuamente os processos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-transparent hover:border-green-200 dark:hover:border-greenTheme/40"
            >
              <div className="text-greenTheme text-2xl shrink-0">
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <p className="text-gray-800 dark:text-gray-200 font-medium text-base sm:text-[15px]">
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
