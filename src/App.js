import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import About from './views/About';
import Products from './views/Products';
import Company from './views/Company';
import Navbar from './components/Navbar';
import Projects from './views/Projects';
import ProjectDetails from './components/ProjectDetails';
import ErrorPage from './views/ErrorPage';
import Joke from './views/Joke';

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
        <Route path="/projects" element={<Projects />}>
          <Route path=":projectId" element={<ProjectDetails />} />
        </Route>
        <Route path="/joke" element={<Joke />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
