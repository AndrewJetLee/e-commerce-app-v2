import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";

function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
