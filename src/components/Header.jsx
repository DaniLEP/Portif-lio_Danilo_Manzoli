import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#191970] p-4 text-white border-b-2 border-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Portfólio - Danilo Santos Manzoli</div>

        {/* Botão para Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-4">
          <li><a href="/about" className="hover:text-gray-400">Sobre Mim</a></li>
          <li><a href="#awards" className="hover:text-gray-400">Certificações</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projetos</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contato</a></li>
        </ul>

        {/* Menu Mobile */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-[#191970] flex flex-col items-center space-y-4 p-4 md:hidden">
            <li><a href="/about" className="hover:text-gray-400" onClick={toggleMenu}>Sobre Mim</a></li> 
            <li><a href="#awards" className="hover:text-gray-400" onClick={toggleMenu}>Certificações</a></li><hr />
            <li><a href="#projects" className="hover:text-gray-400" onClick={toggleMenu}>Projetos</a></li><hr />
            <li><a href="#contact" className="hover:text-gray-400" onClick={toggleMenu}>Contato</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
