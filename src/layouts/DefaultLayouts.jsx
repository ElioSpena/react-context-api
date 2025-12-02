import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function DefaultLayouts() {
  return (
    <>
      <Header />
      <main className="py-5 bg-secondary" style={{ height: "100%" }}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
