import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/product/:product_id" element={<Product />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
