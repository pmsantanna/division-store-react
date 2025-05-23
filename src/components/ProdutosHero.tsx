// src/components/ProdutosHero.tsx
import '../styles/produtos-hero.css';

function ProdutosHero() {
  return (
    <section className="banner-principal flex items-center justify-center text-center">
      <div className="container px-4">
        <h1 className="ritual-titulo">RITO.01</h1>
        <p className="ritual-sub">
          O selo foi ativado. Cada peça carrega um fragmento do ritual.
        </p>
        <p className="ritual-mantra">Vestir é fazer parte da invocação.</p>

        <a
          href="#colecao"
          className="rito-button font-rajdhani uppercase text-sm px-6 py-3 border-2 border-white relative inline-block"
        >
          VER COLEÇÃO
          <span className="rito-button-glow pointer-events-none" />
        </a>
      </div>
    </section>
  );
}

export default ProdutosHero;
