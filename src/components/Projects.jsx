import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#F0F0F0F0] text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#696969]">Meus Projetos</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 justify-items-center">
          {/* Projeto 1 */}
          <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img src="/Virus.svg" className="w-full bg-black mb-6 mt-20" alt="Projeto VirusHunter" />
            <p className="text-black mb-4 font-medium">Identifica arquivos e URLs com risco de vírus que afetam seu computador!</p>
            <Link to={'https://app-virus-inspector.vercel.app/'} className="text-purple-600 font-semibold hover:underline">Ver Mais!</Link>
          </div>

          {/* Projeto 2 */}
          <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img src="/adote.svg" className="w-40 mb-6" alt="Projeto AdotePetz" />
            <p className="text-black mb-4 font-medium">AdotePetz: projeto voluntário que ajuda ONGs a fazer doações de animais em São Paulo.</p>
            <Link to={'https://equipeabandonodean.wixsite.com/website'} className="text-purple-600 font-semibold hover:underline">Ver Mais!</Link>
          </div>

          {/* Projeto 3 */}
          <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img src="/oportunidade.svg" className="w-full max-w-xs mb-6 rounded-lg" alt="Projeto Oportunidade" />
            <p className="text-black mb-4 font-medium">Ajuda na inserção de pessoas autistas no mercado de trabalho, focado em capacitação profissional.</p>
            <Link to={'https://drive.google.com/file/d/17nQu8ntp9ULm0KCDsEjmFJuOkd9QPmty/view?usp=sharing'} className="text-purple-600 font-semibold hover:underline">Ver Mais!</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
