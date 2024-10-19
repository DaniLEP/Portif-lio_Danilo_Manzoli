import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      {/* Onde as páginas filhas serão renderizadas */}
      <Outlet />
    </>
  );
};

export default App;
