import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const staticPart = "Qualidade";
  const typingTarget = " vai além de não ter bugs.";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < typingTarget.length) {
        setDisplayText((prev) => prev + typingTarget.charAt(index));
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); // velocidade da digitação

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="bg-gray-50 dark:bg-grayThemeDark text-gray-800 dark:text-white min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 transition-colors duration-300">
      <div className="max-w-7xl w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">

        {/* Texto & Ações */}
        <div className="space-y-6 text-center md:text-left w-full">
          <span className="inline-block bg-green-100 text-greenThemeDark px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-widest shadow-sm">
            Quality Assurance Júnior
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight min-h-[4rem]">
            <span className="text-greenTheme">{staticPart}</span>{displayText}
          </h1>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            Olá! Sou Matheus, QA júnior com foco em testes funcionais, exploratórios e automação. Valorizo software confiável, usável e bem testado.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center gap-2 bg-greenTheme text-white px-6 py-3 rounded-lg shadow-md hover:bg-greenThemeDark transition"
            >
              <FontAwesomeIcon icon={faBug} />
              Ver Projetos
            </Link>
            <a
              href="https://github.com/msouza09"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-greenTheme text-greenTheme px-6 py-3 rounded-lg hover:bg-greenTheme hover:text-white transition shadow-sm"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-souza-1a0622235"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-greenTheme text-greenTheme px-6 py-3 rounded-lg hover:bg-greenTheme hover:text-white transition shadow-sm"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative flex justify-center w-full">
          <div className="relative z-10 rounded-full overflow-hidden border-4 border-greenTheme shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <img
              src="/img/matheus.jpg"
              alt="matheus"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute inset-0 z-0 rounded-full blur-2xl bg-greenTheme opacity-30 scale-110" />
        </div>
      </div>
    </section>
  );
};

export default Home;
