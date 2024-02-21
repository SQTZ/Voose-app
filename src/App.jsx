import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function App() {


  return (
    <div className='dashboard-container'>
            <div className='left-box'>
                <img src="iconvoose.png" alt="dz" />

                <div className='items-center'>
                    <Link to="/create" className='link-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-plus" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#70d8c1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M12 11l0 6" />
                            <path d="M9 14l6 0" />
                        </svg>
                    </Link>

                    <Link to="/createtest" className='link-btn'>Aller sur la Création</Link>
                </div>

                <span className='items-end'>V.0.0.1</span>
            </div>
            {/* Ajoutez ici le contenu principal du dashboard à droite */}
            <div className="container">
          <h1>Welcome back!</h1>

        </div>
        </div>
  );
}

export default App;
