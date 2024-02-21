import React, { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri'; // Assurez-vous que cette API est correctement configurée
import { SubmitToCSVtest } from '../js/functions';
import optionsprde from '../json/optiondp.json';
import optionsfamily from '../json/optionfamily.json';
import optionstypeproduct from '../json/optiontypeproduct.json';
import optionssexe from '../json/optionsexe.json';
import optionsannee from '../json/optionannee.json';
import optionsmarque from '../json/optionmarque.json';
import optionsachatfournisseur from '../json/optionmarque.json'; // Vérifiez si c'est le bon fichier JSON
import optionscategorie from '../json/optioncategorie.json';
import 'typeface-montserrat';

function SelectionDP() {
    const [inputSets, setInputSets] = useState([{ selectedOptionPRDE: '' }]);
    const [jsonContent, setJsonContent] = useState([]);
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        // Ajoutez ici toute initialisation nécessaire
    }, []);

    const handleSelectChangePRDE = (event, index) => {
        const value = event.target.value;
        let newInputSets = [...inputSets];
        newInputSets[index] = { ...newInputSets[index], selectedOptionPRDE: value };
        
        // Chargez le fichier JSON si "PR" est sélectionné
        if (value === 'PR') {
            loadJsonFile(fileName);
        }

        setInputSets(newInputSets);
    };

    const handleInputChange = async (event) => {
        setFileName(event.target.value);
    };

    const loadJsonFile = async (fileName) => {
        try {
            const content = await invoke('read_json_file', { fileName });
            setJsonContent(JSON.parse(content));
        } catch (error) {
            console.error("Error reading file:", error);
        }
    };

    // Générer des lignes de configuration basées sur les sélections pour "DE"
    const generateConfigLinesForDE = () => {
        // Ici, vous pouvez ajouter la logique pour générer des configurations basées sur les sélections
    };

    // Ajouter un nouvel ensemble d'inputs
    const addInputSet = () => {
        setInputSets([...inputSets, { selectedOptionPRDE: '' }]);
    };

    // Supprimer un ensemble d'inputs
    const removeInputSet = (index) => {
        const newInputSets = inputSets.filter((_, i) => i !== index);
        setInputSets(newInputSets);
    };

    // Soumettre les données pour la création de CSV
    const handleSubmitToCSV = () => {
        // Générer des lignes de configuration pour "DE" si nécessaire
        if (inputSets.some(set => set.selectedOptionPRDE === 'DE')) {
            generateConfigLinesForDE();
        }
        // Ensuite, soumettre les données pour la création de CSV
        SubmitToCSVtest(inputSets);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder='Nom de votre fichier pour PR'
                    onChange={handleInputChange}
                    value={fileName}
                />
                <button onClick={() => loadJsonFile(fileName)}>Charger le fichier JSON</button>
            </div>
            {inputSets.map((inputSet, index) => (
                <div key={index}>
                    <select onChange={(e) => handleSelectChangePRDE(e, index)} value={inputSet.selectedOptionPRDE}>
                        <option value="">Sélectionner PR ou DE</option>
                        {optionsprde.map(option => (
                            <option key={option.value} value={option.value}>{option.text}</option>
                        ))}
                    </select>
                    {/* Ajouter ici d'autres champs en fonction des besoins */}
                    {inputSet.selectedOptionPRDE === 'PR' && (
                        // Afficher des options spécifiques pour PR si nécessaire
                        <>
<div className='container-input blocked'>
                                        <input type="text" id={`b_colonne_${index}`} readOnly="readonly" />
                                        <div className='texter-btn'>B</div>
                                    </div>

                                    <div className='container-input'>
                                        {/* <label htmlFor={`c_${index}`}>Code Barre</label> */}
                                        <input type="text" id={`c_colonne_${index}`} value="<A générer>" />
                                        <div className='texter-btn'>C</div>
                                    </div>



                                <div className='container-input blocked'>
                                    <input type="text" id={`v_colonne_${index}`} readOnly="readonly" />
                                    <div className='texter-btn'>V</div>
                                </div>

                                <div className='container-input blocked'>
                                    <input type="text" id={`w_colonne_${index}`} readOnly="readonly" />
                                    <div className='texter-btn'>W</div>
                                </div>

                                <div className='container-input blocked'>
                                    <input type="text" id={`x_colonne_${index}`} readOnly="readonly" />
                                    <div className='texter-btn'>X</div>
                                </div>

                                <div className='container-input blocked'>
                                    <input type="text" id={`y_colonne_${index}`} readOnly="readonly" />
                                    <div className='texter-btn'>Y</div>
                                </div>

                                <div className='container-input blocked'>
                                    <input type="text" id={`z_colonne_${index}`} readOnly="readonly" />
                                    <div className='texter-btn'>Z</div>
                                </div>

                                <div className='container-input blocked'>
                                    <input type="text" id={`aa_colonne_${index}`} readOnly="readonly" />
                                    <div className='texter-btn'>AA</div>
                                </div>

                                <div className='container-input blocked'>
                                    <input type="text" id={`ab_colonne_${index}`} readOnly="readonly" />
                                    <div className='texter-btn'>AB</div>
                                </div>
                                </>
                    )}
                    <button onClick={() => removeInputSet(index)}>Supprimer</button>
                </div>
            ))}
            <button onClick={addInputSet}>Ajouter une sélection</button>
            <button onClick={handleSubmitToCSV}>Créer et Exporter</button>
        </div>
    );
}

export default SelectionDP;
