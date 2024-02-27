import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Documentation() {


    return (
        <div className='dashboard-container'>
            <div className='left-box'>
                <img src="iconvoose.png" alt="Voose icon" />

                <div className='items-center'>
                    <Link to="/create" className='link-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#70d8c1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M12 11l0 6" />
                            <path d="M9 14l6 0" />
                        </svg>
                    </Link>

                    <Link to="/createtest" className='link-btn'>Aller sur la Création</Link>

                    <Link to="/soon" className='link-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-background" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#70d8c1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 8l4 -4" />
                            <path d="M14 4l-10 10" />
                            <path d="M4 20l16 -16" />
                            <path d="M20 10l-10 10" />
                            <path d="M20 16l-4 4" />
                        </svg>
                    </Link>

                    <Link to="/soon" className='link-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-background" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#70d8c1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 8l4 -4" />
                            <path d="M14 4l-10 10" />
                            <path d="M4 20l16 -16" />
                            <path d="M20 10l-10 10" />
                            <path d="M20 16l-4 4" />
                        </svg>
                    </Link>
                </div>



                <div className='flexing-end'>
                    <div className='gap-end'>
                        <Link to="/documentation"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="aliceblue" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                            <path d="M3 6l0 13" />
                            <path d="M12 6l0 13" />
                            <path d="M21 6l0 13" />
                        </svg>
                        </Link>

                        <Link to="/config">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="aliceblue" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            </svg>
                        </Link>
                    </div>
                    <div><span className='items-end'>V.0.0.3</span></div>
                </div>



            </div>

            {/* Ajoutez ici le contenu principal du dashboard à droite */}
            <div className="container-doc">
                <h1>Documentation</h1>
                <div className="doc-container">

                    <li><a href="#introduction">Introduction</a><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="aliceblue" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg></li>
                    <li><a href="#getting-started">Getting Started</a><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="aliceblue" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg></li>
                    <li><a href="#components">Components</a><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="aliceblue" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg></li>
                    <li><a href="#api">API</a><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="aliceblue" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg></li>
                    <li><a href="#faq">FAQ</a><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="aliceblue" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg></li>



                    <div className='doc-content'>
                        <h2 id="introduction">Introduction<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="aliceblue" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 15l6 -6" />
                            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                        </svg></h2>
                        <p>tes</p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Documentation;
