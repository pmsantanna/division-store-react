import '../styles/landing-hero.css';

function LandingHero() {
  return (
    <section className="landing-hero relative h-screen bg-black overflow-hidden flex items-center justify-center text-center">
      <div className="selo-animado" aria-hidden="true" />

      <div className="grain-overlay" aria-hidden="true" />

      <div className="overlay-content relative z-[2] px-4">
        <h1 className="font-orbitron text-white text-6xl md:text-7xl font-extrabold tracking-wide glitch-text">
          DIV<span className="text-pink-500 glitch">//</span>ISION
        </h1>

        <p className="mt-6 text-gray-300 text-xl font-rajdhani">
          O selo foi ativado.
        </p>
        <p className="text-gray-400 text-lg font-rajdhani italic mt-1">
          Cada peça carrega um fragmento do ritual.
        </p>

        <a
          href="/produtos"
          className="rito-button inline-block mt-8 font-rajdhani uppercase text-sm px-6 py-3 border-2 border-white relative overflow-hidden"
        >
          VER COLEÇÃO
          <span className="rito-button-glow" />
        </a>
      </div>
    </section>
  );
}

export default LandingHero;
