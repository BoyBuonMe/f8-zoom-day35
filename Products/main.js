function ProductCard() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [modal, setModal] = React.useState(null);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        console.log(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading</div>;

  return (
    <>
      <div className="product-list">
        {products.map((product) => {
          const body =
            product.body.length > 100
              ? product.body.slice(0, 100) + "..."
              : product.body;
          return (
            <div className="product-card" key={product.id}>
              <span className="product-id">#{product.id}</span>
              <h2 className="product-title">{product.title}</h2>
              <p className="product-body">{body}</p>
              <Button
                className="product-btn"
                children="Xem chi tiết"
                onClick={() => setModal(product)}
              />
            </div>
          );
        })}
      </div>

      {modal && (
        <div className="modal" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>
              {modal.title.charAt(0).toUpperCase() + modal.title.slice(1)}
            </h2>
            <p>{modal.body}</p>
            <Button
              className="close"
              children="Đóng"
              onClick={() => setModal(null)}
            />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

const inner = (
  <>
    <ProductCard />
  </>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(inner);
