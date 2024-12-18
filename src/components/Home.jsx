import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <section className="bg-purple-700 dark:bg-gray-800 text-white h-screen flex flex-col md:flex-row justify-center items-center p-8 md:p-16">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Olá, eu sou <span className="text-purple-300 dark:text-blue-600">Matheus 🚀</span>
        </h1>
        <p className="text-lg md:text-xl text-purple-200 dark:text-gray-100">
          Desenvolvedor Front-End apaixonado por criar experiências incríveis na web.
        </p>
        <Link
          to="projects" 
          smooth={true}   
          duration={500}  
          className="inline-block bg-purple-500 px-6 py-3 rounded-md text-white font-medium shadow-md hover:bg-purple-400 transition-all duration-300 cursor-pointer dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:shadow-lg dark:border-gray-500 dark:focus:ring-gray-500">
          <FontAwesomeIcon icon={faCode} className="text-1xl mr-1"/>
          Meus Projetos
        </Link>
        <a href="https://github.com/msouza009" target='_blank' className="inline-block bg-purple-500 px-6 py-3 rounded-md text-white font-medium shadow-md hover:bg-purple-400 transition-all duration-300 ml-6 text-1xl dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:shadow-lg dark:border-gray-500 dark:focus:ring-gray-500">
          <FontAwesomeIcon icon={faGithub} className="text-1xl mr-1"/>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/matheus-souza-1a0622235" target='_blank' className="inline-block bg-purple-500 px-6 py-3 rounded-md text-white font-medium shadow-md hover:bg-purple-400 transition-all duration-300 ml-6 text-1xl dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:shadow-lg dark:border-gray-500 dark:focus:ring-gray-500">
          <FontAwesomeIcon icon={faLinkedin} className="text-1xl mr-1"/>
          Linkedin
        </a>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img 
          src="/img/matheus.jpg" 
          alt="matheus" 
          className="rounded-full w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 border-4 border-purple-500 dark:border-blue-700 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
