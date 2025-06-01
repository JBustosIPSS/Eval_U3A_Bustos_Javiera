import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contactenos from './views/Contactenos';
import AboutUs from './views/AboutUs';
import ProductsServices from './views/ProductsServices';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products-services" element={<ProductsServices />} />
          <Route path="/contact-us" element={<Contactenos />} />
        </Routes>
      </Router >
    </div>
  );
};

export default App;
