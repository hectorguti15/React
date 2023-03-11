import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//Pages
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women/";
import Accesories from "./pages/Accesories";
import CartList from "./Components/CartList";
import { ProductInfo } from "./pages/ProductInfo";
import Checkout from "./pages/Checkout";
import Image from "./pages/ImagePage"
import { Error } from "./Components/Error";

function App() {
  return (
    <CartList>
      <BrowserRouter>
        <Routes>
          <Route path="/react" element={<Home />} />
          <Route path="/react/category/men" element={<Men />} />
          <Route path="/react/category/women" element={<Women />} />
          <Route path="/react/category/Accesories" element={<Accesories />} />
          <Route path="/react/:category/:title/:id" element={<ProductInfo />} />
          <Route path="/react/image/:id" element={<Image/>} />
          <Route path="/react/cart" element={<Checkout/>} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CartList>
  );
}

export default App;