import React from 'react';

const Home = () => {
  return (
    <section className="bg-purple-700 text-white h-screen flex flex-col md:flex-row justify-center items-center p-8 md:p-16">
      {/* Texto de Apresentação */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Olá, eu sou <span className="text-purple-300">Matheus 🚀</span>
        </h1>
        <p className="text-lg md:text-xl text-purple-200">
          Desenvolvedor Front-End apaixonado por criar experiências incríveis na web.
        </p>
        <a
          href="#projects"
          className="inline-block bg-purple-500 px-6 py-3 rounded-md text-white font-medium shadow-md hover:bg-purple-400 transition-all duration-300"
        >
          Veja Meus Projetos
        </a>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img 
          src="/img/matheus.jpg" 
          alt="matheus" 
          className="rounded-full w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 border-4 border-purple-500 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
