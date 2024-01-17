import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function App() {


  return (
    <div className="container">
      <h1>Welcome back!</h1>

      <Link to="/create">Aller sur la Création</Link>
    </div>
  );
}

export default App;
