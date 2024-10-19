import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./App.jsx";

// Configurando o Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import About from './components/About.jsx';
import AwardsPage from './components/Award.jsx'; // Se você deseja utilizar esta página em alguma rota futura

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Página de erro
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // Seção de Certificações pode ser colocada aqui se for página independente
      {
        path: "/awards",
        element: <AwardsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
