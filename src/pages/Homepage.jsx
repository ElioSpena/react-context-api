import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center text-light"
      style={{ height: "90vh" }}
    >
      <div className="bg-dark bg-opacity-50 p-5 rounded-4">
        <h1 className="mb-3">Welcome to our store</h1>
        <p className="lead mb-4">Discover our products at the best price!</p>
        <Link to="/products" className="btn btn-outline-light btn-lg">
          To products
        </Link>
      </div>
    </section>
  );
}
