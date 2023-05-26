import BrandContainer from "./components/Brands/BrandContainer";
import ALLcategoryContainer from "./components/Category/ALLcategoryContainer";
import Footer from "./components/utility/Footer";
import NavBarLogin1 from "./components/utility/Navbarlogin";
import LoginPage from "./page/Auth/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage";
import HomePage from "./page/Home/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopProduct from "./page/Products/ShopProuduct";
function App() {
  return (
    <div className="font">
    <NavBarLogin1/>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/allcategory" element={<ALLcategoryContainer/>}/>
          <Route path="/allbrand" element={<BrandContainer/>}/>
          <Route path="/product" element={<ShopProduct/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
