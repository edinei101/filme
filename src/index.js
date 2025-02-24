import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderização
import App from './App'; // Importa o componente principal App
import './App.css'; // Importa os estilos globais

// Cria uma raiz de renderização no elemento com ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o aplicativo dentro do modo StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);