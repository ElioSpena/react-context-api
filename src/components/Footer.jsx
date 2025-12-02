import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark py-4 fixed-bottom mt-5">
      <div className="container">
        <NavLink to={"/about-us"}></NavLink>
      </div>
    </footer>
  );
}
