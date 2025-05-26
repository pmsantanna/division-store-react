import React from 'react';
import { LinkButton } from '../components/Button/LinkButton';
import { NavBar } from '../components/NavBar/NavBar';

import '../styles/home.css';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <main className="hero-section relative flex-grow flex items-center justify-center px-4 text-center">
        {/* grain como camada de fundo */}
        <div className="overlay-grain absolute inset-0 z-10"></div>

        {/* conteúdo real */}
        <div className="relative z-20">
          <h1 className="logo-glitch animation-flicker">
            div<span className="animation-glitchcolor">//</span>ision
          </h1>
          <p className="frase-central text-lg mt-4 mb-2">
            O RITUAL COMEÇA AQUI
          </p>
          <p className="frase-sub text-base italic mt-1 mb-8">
            Cada peça é um selo. Cada selo, uma presença.
          </p>
          <LinkButton to={'/produtos'}>Entrar na Invocação</LinkButton>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t py-4 text-center">
        <p className="text-sm landing-footer">
          &copy; {new Date().getFullYear()} DIV//ISION Store. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
