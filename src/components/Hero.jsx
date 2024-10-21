export default function Hero() {
  const styles = {
    section: {
      backgroundColor: '#1a202c', // bg-gray-900
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'fadeIn 1s ease-in-out',
    },
    h1: {
      fontSize: '2.5rem', // text-4xl
      fontWeight: 'bold',
      marginBottom: '1rem',
      animation: 'slideDown 1s ease-in-out',
    },
    p: {
      fontSize: '1.125rem', // text-lg
      marginBottom: '2rem',
      animation: 'slideDown 1s ease-in-out',
      animationDelay: '0.15s',
    },
    a: {
      backgroundColor: '#3b82f6', // bg-blue-500
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease',
    },
    aHover: {
      backgroundColor: '#1d4ed8', // hover:bg-blue-700
    },
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    '@keyframes slideDown': {
      from: { transform: 'translateY(-20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.h1}>Hello, my name is Danilo Manzoli!</h1>
      <p style={styles.p}>Front-End Developer | I.T - Developer at Instituto Reciclar</p>
      <a
        href="/about/"
        style={styles.a}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.aHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.a.backgroundColor)}
      >
        Come meet me!
      </a>
    </section>
  );
}
