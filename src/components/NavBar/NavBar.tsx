import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link to="/" className="text-2xl font-bold text-primary">
            DIV<span className="animation-glitchcolor">//</span>ISION
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-(--color-neutral-02) font-semibold hover:text-(--color-neutral-03)"
            >
              Home
            </Link>
            <Link
              to="/produtos"
              className="text-(--color-neutral-02) font-semibold hover:text-(--color-neutral-03)"
            >
              Produtos
            </Link>
            <Link
              to="/sobre"
              className="text-(--color-neutral-02) font-semibold hover:text-(--color-neutral-03)"
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              className="text-(--color-neutral-02) font-semibold hover:text-(--color-neutral-03)"
            >
              Contato
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-(--color-primary)"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-(--color-primary)"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-xs text-base font-medium text-white hover:bg-(--color-neutral-05)"
          >
            Home
          </Link>
          <Link
            to="/produtos"
            className="block px-3 py-2 rounded-xs text-base font-medium text-white hover:bg-(--color-neutral-05)"
          >
            Produtos
          </Link>
          <Link
            to="/sobre"
            className="block px-3 py-2 rounded-xs text-base font-medium text-white hover:bg-(--color-neutral-05)"
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className="block px-3 py-2 rounded-xs text-base font-medium text-white hover:bg-(--color-neutral-05)"
          >
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
};
