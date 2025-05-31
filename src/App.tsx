import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/*import Municipio from './views/Municipio';
import Contactenos from './views/Contactenos';
import UnidadesMunicipales from './views/UnidadesMunicipales';
import Home from './views/Home';*/

const App: React.FC = () => {
  return (
    <div>
      hola
    <Router>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/municipio" element={null} />
        <Route path="/contactenos" element={null} />
        <Route path="/unidadesMunicipales" element={null} />
      </Routes>
    </Router >
    </div>
  );
};

export default App;
