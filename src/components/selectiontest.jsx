// Path: src/js/functions.js
import React, { useState, useEffect } from 'react';
import { SubmitToCSVtest } from '../js/functions';
import 'typeface-montserrat';
import { invoke } from '@tauri-apps/api/tauri';

function SelectionDPtest() {
    const [fileName, setFileName] = useState('');
    const [jsonContent, setJsonContent] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [checkedOptions, setCheckedOptions] = useState({ taille: [], couleur: [], matière: [] });
    const [combinations, setCombinations] = useState([]);

    const handleInputChange = async (event) => {
        const inputName = event.target.value;
        setFileName(inputName);
        try {
            const content = await invoke('read_json_file', { fileName: inputName });
            setJsonContent(JSON.parse(content));
            setShowPopup(true);
        } catch (error) {
            console.error("Error reading file:", error);
        }
    };

    const handleCheckboxChange = (type, optionCode) => {
        setCheckedOptions(prev => ({
            ...prev,
            [type]: prev[type].includes(optionCode)
                ? prev[type].filter(code => code !== optionCode)
                : [...prev[type], optionCode]
        }));
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        const tailles = checkedOptions.taille.length > 0 ? checkedOptions.taille : [''];
        const couleurs = checkedOptions.couleur.length > 0 ? checkedOptions.couleur : [''];
        const matières = checkedOptions.matière.length > 0 ? checkedOptions.matière : [''];

        const newCombinations = [];
        tailles.forEach(taille => {
            couleurs.forEach(couleur => {
                matières.forEach(matière => {
                    newCombinations.push({ taille, couleur, matière });
                });
            });
        });
        setCombinations(newCombinations);
    };

    // Fonction de suppression d'une ligne
    const handleDeleteCombination = (event, index) => {
        event.preventDefault(); // Empêche le comportement par défaut
        setCombinations(prevCombinations => prevCombinations.filter((_, idx) => idx !== index));
    };

    return (
        <div>
            {/* Section pour définir le fichier JSON */}
            <div>
                <form>
                    <div className='container-input'>
                        <input
                            type="text"
                            id="inputName"
                            placeholder='nom du fichier JSON'
                            onChange={handleInputChange}
                            value={fileName}
                        />
                        <div className='texter-btn-decli'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4h6v6h-6z" />
  <path d="M14 4h6v6h-6z" />
  <path d="M4 14h6v6h-6z" />
  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
</svg></div>
                    </div>
                </form>
            </div>

            {/* Popup pour la sélection des options */}
            {showPopup && (
                <div className='popup'>
                    {jsonContent.map(group => (
                        <>
                            <h3>{group.type}</h3>
                            <div key={group.type} className={group.options.length > 5 ? 'popup-content' : ''}>

                                {group.options.map(option => (
                                    <div key={option.code} className='option'>
                                        <input
                                            className='checkbox-input'
                                            type="checkbox"
                                            id={option.code}
                                            checked={checkedOptions[group.type].includes(option.code)}
                                            onChange={() => handleCheckboxChange(group.type, option.code)}
                                        />
                                        <label htmlFor={option.code}>{option.libellé}</label>
                                    </div>
                                ))}
                            </div>
                        </>
                    ))}
                    <button type='button' onClick={handleClosePopup}>Fermer</button>
                </div>

            )}

            {/* Affichage des déclinaisons générées avec option de suppression */}
            {combinations.map((combo, index) => (
                <div key={index} className="input-row">

                    <div className='container-input blocked'>
                        {/* <label htmlFor={`c_${index}`}>Code Barre</label> */}
                        <input type="text" id={`a_colonne_${index}`} value="DE" />
                        <div className='texter-btn'>A</div>
                    </div>

                    <div className='container-input blocked'>
                        {/* <label htmlFor={`c_${index}`}>Code Barre</label> */}
                        <input type="text" id={`c_colonne_${index}`} value="<A générer>" />
                        <div className='texter-btn'>C</div>
                    </div>

                    <div className='container-input blocked'>
                        {/* <label htmlFor={`commercialise_${index}`}>Commercialisé</label> */}
                        <input
                            type="checkbox"
                            id={`l_colonne_${index}`}
                            value="Vrai"
                        />
                        <div className='texter-btn'>L</div>
                    </div>

                    <div className='container-input blocked'>
                        {/* <label htmlFor={`commercialise_${index}`}>Commercialisé</label> */}
                        <input
                            type="checkbox"
                            id={`m_colonne_${index}`}
                            value="Vrai"
                        />
                        <div className='texter-btn'>M</div>
                    </div>

                    <div className='container-input blocked'>
                        {/* <label htmlFor={`methodevalorisationstock_${index}`}>Méthode valorisation Stock</label> */}
                        <input type="text" id={`u_colonne_${index}`} value={"Prix moyen pondéré d'achat"} />
                        <div className='texter-btn'>U</div>
                    </div>

                    {/* Détails de la combinaison */}
                    <div className='container-input'>
                        <input type="text" placeholder="Taille" value={combo.taille} id={`e_colonne_${index}`} readOnly />
                        <input type="text" placeholder="Couleur" value={combo.couleur} id={`f_colonne_${index}`} readOnly />
                        <input type="text" placeholder="Matière" value={combo.matière} id={`i_colonne_${index}`} readOnly />

                        {/* Bouton de suppression */}
                        <button type='button' onClick={(event) => handleDeleteCombination(event, index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </button>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default SelectionDPtest;
