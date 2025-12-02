import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useBudget } from "../context/BudgetContext";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [hover, setHover] = useState(false);
  const { budgetMode } = useBudget();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      if (budgetMode) {
        setProducts(
          resp.data.filter((product) => product.price <= parseInt(budgetMode))
        );
      } else {
        setProducts(resp.data);
      }
    });
  }, [budgetMode]);

  return (
    <section className="py-5 container">
      <h1 className="py-3 text-light text-center">Products</h1>
      <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 list-unstyled">
        {products.map((curProd) => (
          <li key={curProd.id} className="col">
            <Link
              to={`/products/${curProd.id}`}
              className="card h-100 unstyle-list"
              onMouseEnter={() => setHover(curProd.id)}
              onMouseLeave={() => setHover(null)}
              style={{
                backgroundColor:
                  hover === curProd.id ? "#efefefff" : "#252525ff",
                color: hover === curProd.id ? "black" : "white",
                border: hover === curProd.id ? "1px solid #bababaff" : "",
              }}
            >
              <img
                src={curProd.image}
                alt={`product${curProd.id}`}
                className="card-img-top object-fit-contain p-3"
                style={{ height: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  {curProd.title.length > 25
                    ? curProd.title.slice(0, 25) + "..."
                    : curProd.title}
                </h5>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
