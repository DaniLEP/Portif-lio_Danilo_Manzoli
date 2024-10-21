import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#191970] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Seção de Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul>
              <li><a href="#about" className="hover:underline">Sobre Mim</a></li>
              <li><a href="#awards" className="hover:underline">Certificações</a></li>
              <li><a href="#projects" className="hover:underline">Projetos</a></li>
              <li><a href="#contact" className="hover:underline">Contato</a></li>
            </ul>
          </div>

          {/* Seção de Redes Sociais */}
          <div>
            <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
            <ul className="flex justify-center md:justify-start space-x-4">
              <li>
                <a href="https://www.linkedin.com/in/danilo-santos-manzoli-2961ba212/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://github.com/DaniLEP" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                </a>
              </li>
            </ul>
          </div>

          {/* Seção de Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <p className="leading-relaxed">
              Danilo Santos Manzoli <br />
              <a href="mailto:danilomanzoli64@gmail.com" className="underline">danilomanzoli64@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm">&copy; 2024 Danilo Santos Manzoli. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
