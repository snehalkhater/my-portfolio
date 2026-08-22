import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes, Route } from "react-router";
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Navbar from './components/Navbar';

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  
)
