import React from "react";
import styles from "./Products.module.scss";
import { NAVBAR_HEIGHT } from "../../components/Navigation";

function ProductCard() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [modal, setModal] = React.useState(null);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        // console.log(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className={styles.loading}>Loading</div>;

  return (
    <div style={{height: "100vh", paddingTop: "72px"}}>
      <div className={styles.productList}>
        {products.map((product) => {
          const body =
            product.body.length > 100
              ? product.body.slice(0, 100) + "..."
              : product.body;
          return (
            <div className={styles.productCard} key={product.id}>
              <span className={styles.productId}>#{product.id}</span>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p className={styles.productBody}>{body}</p>
              <button onClick={() => setModal(product)} className={styles.productBtn}>
                Xem chi tiết
              </button>
            </div>
          );
        })}
      </div>

      {modal && (
        <div className={styles.modal} onClick={() => setModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>
              {modal.title.charAt(0).toUpperCase() + modal.title.slice(1)}
            </h2>
            <p>{modal.body}</p>
            <button onClick={() => setModal(null)} className={styles.close}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
