import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="w-full z-50 bg-black border-b border-white/90 fixed md:static">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-orbitron tracking-widest font-bold text-glitch transition"
        >
          DIV<span className="text-pink-500 glitch">//</span>ISION
        </Link>

        <ul className="flex gap-6 text-sm text-white font-rajdhani uppercase tracking-wide">
          <li>
            <Link
              to="/produtos"
              className="hover:text-pink-500 transition duration-300"
            >
              Produtos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
