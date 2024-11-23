import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-purpleTheme-dark py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
        <p className="mb-6">Você pode me encontrar nas redes sociais ou enviar uma mensagem diretamente.</p>
        <a href="mailto:szmatheussouza@gmail.com" className="bg-purpleTheme-light text-purpleTheme-dark px-6 py-3 rounded-md hover:bg-purpleTheme-dark hover:text-white">
          Enviar Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
