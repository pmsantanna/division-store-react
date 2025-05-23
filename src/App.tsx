import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingHero from './components/LandingHero';
import Produtos from './pages/Produtos';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<LandingHero />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
