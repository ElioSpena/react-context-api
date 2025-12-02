import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayouts from "./layouts/DefaultLayouts";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsDetails from "./pages/ProductsDetails";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayouts />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/products">
            <Route path="" element={<ProductsPage />} />
            <Route path=":id" element={<ProductsDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
