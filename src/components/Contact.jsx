import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-grayThemeDark py-20 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Vamos conversar?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Me envie um e-mail ou chame no LinkedIn para falarmos sobre QA, automação de testes e como posso contribuir com seu time.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          {/* Email */}
          <a
            href="mailto:szmatheussouza@gmail.com"
            className="flex items-center gap-2 bg-white dark:bg-transparent border border-greenTheme text-greenTheme px-6 py-3 rounded-md hover:bg-greenTheme hover:text-white transition-all duration-300 shadow-sm dark:shadow-md"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
            <span>Email</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/matheus-souza-1a0622235/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-transparent border border-greenTheme text-greenTheme px-6 py-3 rounded-md hover:bg-greenTheme hover:text-white transition-all duration-300 shadow-sm dark:shadow-md"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
