import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import About from './views/About';
import Products from './views/Products';
import Company from './views/Company';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
