import React from 'react';

const projects = [
  { id: 1, title: 'Projeto 1', description: 'Descrição breve do projeto.' },
  { id: 2, title: 'Projeto 2', description: 'Descrição breve do projeto.' },
  { id: 3, title: 'Projeto 3', description: 'Descrição breve do projeto.' },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-purpleTheme-light py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-purpleTheme-dark">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
