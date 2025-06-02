import React from 'react';

const projects = [
  {
    id: 1,
    title: 'OrangeHRM Automation',
    image: '/img/orange-hrm.png',
    link: 'https://cloud.cypress.io/projects/71ov9i/runs',
    description:
      'Automação de testes end-to-end utilizando Cypress no sistema OrangeHRM, validando fluxo de login, cadastro e logout.',
    stack: ['Cypress', 'E2E', 'Funcional']
  },
  {
    id: 2,
    title: 'Dou Um Help!',
    image: '/img/douumhelp.png',
    link: 'https://www.douumhelp.com/',
    description:
      'Atuei como QA no controle de bugs, validação de critérios de aceite e testes exploratórios. Mapeei inconsistências, organizei feedbacks e colaborei com a equipe de devs para garantir estabilidade da aplicação.',
    stack: ['Manual', 'Exploratório', 'Gestão de Bugs']
  },
  {
    id: 3,
    title: 'Buggy Cars Rating',
    image: '/img/buggy-cars.png',
    link: 'https://cloud.cypress.io/projects/wne4rr/runs',
    description:
      'Automação de testes end-to-end com Cypress no Buggy Cars Rating, cobrindo login, cadastro de usuários e submissão de avaliações. Abrange cenários positivos e negativos.',
    stack: ['Cypress', 'E2E', 'Testes Funcionais']
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-grayThemeDark py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projetos como QA
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-greenTheme transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-greenThemeDark dark:bg-greenTheme/10 dark:text-green-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
