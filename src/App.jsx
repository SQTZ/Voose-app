import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './components/navbar';

import './styles.css';

function App() {


  return (
    <div className='dashboard-container'>
      <Navbar />

      {/* Ajoutez ici le contenu principal du dashboard à droite */}
      <div className="container-doc">
        <h1>Welcome back!</h1>

      </div>
    </div>
  );
}

export default App;
