import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import './App.css';
import Navbar from './Navigation/Navbar';
import About from './Navigation/About';
import Contact from './Navigation/Contact';

function App() {
  return (
    
   <BrowserRouter>
      <Navbar />

      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
