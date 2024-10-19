import React from 'react';

const AwardsPage = () => {
  const awards = [
    {
      title: 'Certificado - Técnico em Recursos Humanos',
      year: 2023,
      description: 'Certificado recebido após completar um curso técnico no Sequêncial Grupo Educacional em Técnico em Recursos Humanos.',
    },
    {
      title: 'Certificado - Assistente de Manutenção de Computadores',
      year: 2022,
      description: 'Certificado recebido após completar um curso técnico no Senac em Manutenção de Computadores.',
    },
    {
      title: 'Certificado - Assistente de Operação de Redes de Computadores',
      year: 2022,
      description: 'Certificado recebido após completar um curso técnico no Senac em Redes de Computadores.',
    },
    {
      title: 'Técnico em Informática',
      year: 2022,
      description: 'Certificado recebido após completar um curso técnico no Senac em Técnico em Informática.',
    },
    {
      title: 'Certificado - Introdução ao HTML5 & CSS3',
      year: 2022,
      description: 'Certificado recebido após completar um curso técnico na Digital Innovation One em Introdução ao HTML5 & CSS3.',
    },
    {
      title: 'Certificado - Primeiros Passos para Desenvolvimento Web',
      year: 2022,
      description: 'Certificado recebido após completar um curso técnico na Digital Innovation One em Primeiros Passos para Desenvolvimento Web.',
    },
    {
      title: 'Certificado - Auxiliar de Recursos Humanos',
      year: 2022,
      description: 'Certificado recebido após completar um curso técnico no Sequêncial Grupo Educacional em Auxiliar de Recursos Humanos.',
    },
    {
      title: 'Certificado - Jovem Reciclar 2021',
      year: 2022,
      description: 'Certificado recebido após completar um curso técnico no Instituto de Reciclagem de Adolescente - Reciclar em Jovem Reciclar 2021.',
    },
    {
      title: 'Prêmio - Trilhas Digitais',
      year: 2021,
      description: '1º Lugar - Onde recebemos um capital semente de R$5.000 para ajudar a desenvolver o projeto AdotePetz. Nesse prêmio recebi um certificado e uma mentoria para fortalecer o projeto.',
    },
    {
      title: 'Certificado - Trabalhando com Git & GitLab',
      year: 2021,
      description: 'Certificado recebido após completar um curso técnico na Digital Innovation One em Trabalhando com Git e GitLab.',
    },
    {
      title: 'Certificado - Introdução ao Git & GitHub',
      year: 2021,
      description: 'Certificado recebido após completar um curso técnico na Digital Innovation One em Trabalhando com Git e GitLab.',
    },
  ];

  return (
    <section className="py-16 bg-[#f0f0f0f0] text-gray-800">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl text-[#696969] md:text-5xl font-bold mb-8">Certificados e Reconhecimentos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 cursor-pointer">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{award.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-2">{award.year}</p>
              <p className="text-gray-700 text-sm sm:text-base">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsPage;
