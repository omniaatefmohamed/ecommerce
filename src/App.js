import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Slider from "./components/Slider";
import About from "./components/About";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Slider />
          <Products />
        </>} />
        <Route path="/about" element={<About />}/>
      </Routes>

    </div>
  );
}

export default App;
