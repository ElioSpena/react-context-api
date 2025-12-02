import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductsDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) =>
        !resp.data ? navigate("/products") : setProduct(resp.data)
      );
  }, [id]);

  return (
    <section className="container mt-3 py-5" style={{ height: "200vh" }}>
      {!product ? (
        <div className="container text-end">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-light text-center" style={{ height: "100px" }}>
            {product.title}
          </h2>

          <div className="row d-flex align-items-center">
            <div className="col-md-4 p-4 border-end border-4 border-secondary d-flex justify-content-center">
              <img
                style={{
                  height: "300px",
                  width: "300px",
                  objectFit: "contain",
                }}
                src={product.image}
                className="img-fluid rounded-start"
                alt={`product${product.id}`}
              />
            </div>
            <div
              className="card mb-3 border border-secondary rounded-4 col-md-8 p-3"
              style={{ height: "100%" }}
            >
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Info about this item</h4>
                <p className="card-text p-4">{product.description}</p>
                <p className="card-text text-end">
                  <strong className="text-body-secondary fs-1">{`${product.price} €`}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end gap-4 py-5">
            <Link
              to={`/products/${parseInt(id) - 1}`}
              className="btn btn-outline-light"
            >
              Prev Product
            </Link>
            <Link
              to={`/products/${parseInt(id) + 1}`}
              className="btn btn-outline-light"
            >
              Next Product
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
