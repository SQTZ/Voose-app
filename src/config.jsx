import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ChangeDeclinaison from './settings/ChangeDeclinaison';

function Config() {
    const [selectedComponent, setSelectedComponent] = useState('ChangeDeclinaison');

    // Fonction pour changer le composant affiché
    const handleComponentChange = (component) => {
        setSelectedComponent(component);
    };

    // Fonction pour afficher le composant sélectionné
    const renderComponent = () => {
        switch (selectedComponent) {
            case 'ChangeDeclinaison':
                return <ChangeDeclinaison />;
            // Ajoutez d'autres cas ici pour d'autres composants

            default:
                return; // Affiche par défaut un composant vide ou un autre composant de votre choix
        }
    };

    return (
    <div className='dashboard-container'>
        <div className='left-box-settings'>
            <Link to="/"><img src="iconvoose.png" alt="Voose icon" /></Link>

            <div className='settings-navbar'>
            <div className='link-btn-settings' onClick={() => handleComponentChange('ChangeDeclinaison')}><p>Déclinaisons</p></div>
            <div className='link-btn-settings' onClick={() => handleComponentChange('default')}><p>Fournisseurs</p></div>
            <div className='link-btn-settings' onClick={() => handleComponentChange('default')}><p>config</p></div>
            <div className='link-btn-settings' onClick={() => handleComponentChange('default')}><p>config</p></div>
            <div className='link-btn-settings' onClick={() => handleComponentChange('default')}><p>A propos</p></div>
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
                <div><span className='items-end'>V.0.1.0</span></div>
            </div>
        </div>

        <div className='container-settings'>
        {renderComponent()}
        </div>
    </div>

    );
}

export default Config;
