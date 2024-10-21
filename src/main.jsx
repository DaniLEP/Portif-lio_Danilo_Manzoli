import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./App.jsx";

// Configurando o Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import About from './components/About.jsx';
import AwardsPage from './components/Award.jsx'; // Página de prêmios/certificações
import GoogleForm from './components/Contact.jsx'; // Página de contato

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
        path: "/about/",
        element: <About />,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
