import produtos from '../data/produtos';
import '../styles/produtos.css';

function getClasseProduto(nome: string) {
  const lower = nome.toLowerCase();
  if (lower.includes('moletom')) return 'moletom';
  if (lower.includes('camiseta')) return 'camiseta';
  if (lower.includes('calça') || lower.includes('calca')) return 'calca';
  if (lower.includes('camisa')) return 'camisa';
  return '';
}

function ProdutosGrid() {
  return (
    <section className="produto-vitrine" id="colecao">
      <div className="container py-5">
        <h2 className="text-center mb-5 text-light fw-bold">
          COLEÇÃO BREATHE DIVINITY 2025
        </h2>

        <div className="row justify-content-center g-4">
          {produtos.map((produto, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
              <div
                className={`card h-100 text-center bg-dark text-white border-0 rounded-4 ${getClasseProduto(
                  produto.nome,
                )}`}
              >
                <img
                  src={produto.imagem}
                  className="card-img-top"
                  alt={produto.nome}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold">{produto.nome}</h5>
                  <p className="card-text small text-muted">
                    {produto.descricao}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <p className="fs-5 fw-bold text-primary mb-2">
                    R$ {Number(produto.preco).toFixed(2)}
                  </p>
                  <button className="btn btn-outline-light w-100">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProdutosGrid;
