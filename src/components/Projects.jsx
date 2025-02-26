import React from 'react';

const projects = [
  { id: 1, title: 'Microgravity Motion', image: '/img/microgravity-motion.png', link: 'https://github.com/EduHOA/SocioTech-NASA', description: 'Jogo do NASA Space Apps Challenge 2024 para melhorar a saúde de astronautas em missões espaciais através de desafios de microgravidade.', },
  { id: 2, title: 'Scientia', image: '/img/scientia.png', link: 'https://github.com/VibeTeech/Scientia---VibeTech', description: 'Quiz educativo desenvolvido para crianças, transformando o aprendizado em um jogo interativo e divertido.' },
  { id: 3, title: 'Dou um Help!',image: '/img/douumhelp.png', link: 'https://github.com/douumhelp/douumhelp', description: 'Aplicativo em desenvolvimento para conectar profissionais a serviços de reparo e manutenção doméstica.' },
  { id: 4, title: 'Dou um Teste!',image: '/img/douumhelp.png', link: 'https://github.com/douumhelp/douumhelp', description: 'Aplicativo em desenvolvimento para conectar profissionais a serviços de reparo e manutenção doméstica.' },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-purpleTheme-light py-16 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-purpleTheme-dark dark:text-white">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a key={project.id} href={project.link} target='_blank' className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-700 dark:text-gray-200 dark:shadow-lg dark:hover:shadow-xl">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
              <p className="dark:text-gray-300">{project.description}</p>
              <img src={project.image} alt={project.title} className="mt-4 rounded dark:border-gray-700"/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
