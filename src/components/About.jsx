import AwardsPage from "./Award";
import GoogleForm from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";

const About = () => {
  const styles = {
    section: {
      padding: '60px 20px',
      textAlign: 'center',
    },
    aboutSection: {
      backgroundColor: '#191970',
      color: 'white',
    },
    projectsSection: {
      backgroundColor: '#191970',
      color: 'white',
    },
    contactSection: {
      backgroundColor: '#f0f0f0',
      color: '#696969',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
    },
    imgContainer: {
      borderRadius: '50%',
      overflow: 'hidden',
      width: '150px',
      height: '150px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    bioContainer: {
      maxWidth: '800px',
      textAlign: 'left',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
    },
    paragraphContact: {
      fontSize: '1.1rem',
      textAlign: 'center',
    },
    skillsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      marginTop: '30px',
    },
    link: {
      color: 'white',
      textDecoration: 'underline',
    },
  };

  return (
    <>
      <Header />
      <br />

      {/* Seção Sobre Mim */}
      <section id="about" className="py-20 bg-[#f0f0f0]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="relative mb-10 md:mb-0 md:w-1/2">
            <img
              src="/fotoDev.svg"
              alt="Foto do desenvolvedor"
              className="w-full max-w-xs transition-transform transform hover:scale-105 shadow-2xl rounded-lg border border-1 border-black"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left px-4">
            <h2 className="text-3xl text-center text-[#696969] font-bold mb-4">Sobre Mim</h2>
            <p className="text-[#696969] mb-4">
              Olá! Me chamo Danilo Santos, sou desenvolvedor Front-End, apaixonado por criar interfaces de
              usuário elegantes e funcionais. Minha jornada no desenvolvimento começou com a curiosidade
              de entender como as coisas funcionam na web. Hoje, estou focado em construir experiências
              digitais intuitivas, com foco em acessibilidade e performance.
            </p>
            <p className="text-[#696969] mb-4">
              Trabalho com ferramentas como React, Vite e Tailwind CSS, além de estar sempre aprendendo
              sobre as últimas tendências do front-end. Também estou estudando Angular para aumentar meu leque de habilidades.
            </p>
            <p className="text-[#696969] mb-4 text-center">
              Entre em contato comigo pelo meu LinkedIn: 
              <a className="text-[#696969] hover:underline" href="https://www.linkedin.com/in/danilo-santos-manzoli-2961ba212/" target="_blank" rel="noopener noreferrer"> CLIQUE AQUI!</a>
            </p>
            <div className="flex flex-wrap justify-center mt-6 gap-1.5">
              <img alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
              <img alt="css3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
              <img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
              <img alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
              <img alt="react" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
              <img alt="nodejs" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
              <img alt="angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Seção Certificados */}
      <section>
        <AwardsPage />
      </section>

      <hr   />

      {/* Seção Projetos */}
      <section>
        <Projects />
      </section>

      <hr />

      {/* Seção Contato */}
      <section style={{ ...styles.section, ...styles.contactSection }}>
        <h2 style={styles.heading}>Entre em Contato</h2>
        <GoogleForm />
      </section>
      <Footer />
    </>
  );
};

export default About;
