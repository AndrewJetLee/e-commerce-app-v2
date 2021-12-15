import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import ProductList from "./pages/ProductList";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
