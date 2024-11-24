import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <section id="contact" className="bg-white text-purpleTheme-dark py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
        <p className="mb-6">Você pode me encontrar nas redes sociais ou enviar uma mensagem diretamente.</p>
        <a href="mailto:szmatheussouza@gmail.com" className="bg-purpleTheme-light text-purpleTheme-dark px-6 py-3 rounded-md hover:bg-purpleTheme-dark m-2 hover:text-white">
          <FontAwesomeIcon icon={faEnvelope} className='text-1xl mr-1'/>
           Email
        </a>
        <a href="https://www.instagram.com/msouza_09/" target='__blank' className="bg-purpleTheme-light text-purpleTheme-dark px-6 py-3 rounded-md hover:bg-purpleTheme-dark hover:text-white m-2 text-1xl">
          <FontAwesomeIcon icon={faInstagram} className='text-1xl mr-1'/>
          Instagram
        </a>
        <a href="https://www.instagram.com/msouza_09/" target='__blank' className="bg-purpleTheme-light text-purpleTheme-dark px-6 py-3 rounded-md hover:bg-purpleTheme-dark hover:text-white m-2 text-1xl">
          <FontAwesomeIcon icon={faLinkedin} className='text-1xl mr-1'/>
          Linkedin
        </a>
      </div>
    </section>
  );
};

export default Contact;
