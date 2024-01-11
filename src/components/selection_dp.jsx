{/*import React, { useState } from 'react';
import { SubmitToCSVtest } from '../js/functions';
import options from '../json/optiondp.json';

function SelectionDP() {
    const [selectedOption, setSelectedOption] = useState('');

    // Gestion du changement de sélection
    const handleSelectChange = event => {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <form>


               
                <div>
                    <label htmlFor="a1">Type</label>
                    <select name='Productordecli' id="a_colonne" onChange={handleSelectChange} value={selectedOption}>
                        <option value="">Select</option>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>


               
                <div>
                    <label htmlFor="a1">B</label>
                    <input type="text" id="b_colonne" />
                </div>

                <button type="button" onClick={(event) => SubmitToCSVtest(event)}>Clique</button>



            </form>
        </div>
    );
}

export default SelectionDP; // Exportez le composant en tant que composant par défaut*/}





import React, { useState } from 'react';
import { SubmitToCSVtest } from '../js/functions';
import options from '../json/optiondp.json';

function SelectionDP() {
    // Chaque élément de inputSets représente un ensemble d'inputs
    const [inputSets, setInputSets] = useState([{}]);

    // Gestion du changement de sélection pour chaque ensemble d'inputs
    const handleSelectChange = (event, index) => {
        // Mise à jour de l'option sélectionnée pour le set d'input spécifié
        const newInputSets = [...inputSets];
        newInputSets[index].selectedOption = event.target.value;
        setInputSets(newInputSets);
    };

    // Ajouter un nouvel ensemble d'inputs
    const addInputSet = () => {
        setInputSets([...inputSets, {}]);
    };

    return (
        <div>
            <form>
                {inputSets.map((inputSet, index) => (
                    <div key={index}>
               
                        <div>
                            <label htmlFor={`type_${index}`}>Type</label>
                            <select name={`Productordecli_${index}`} id={`a_colonne_${index}`} onChange={(e) => handleSelectChange(e, index)} value={inputSet.selectedOption || ''}>
                                <option value="">Select</option>
                                {options.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>

                      
                        <div>
                            <label htmlFor={`b_${index}`}>B</label>
                            <input type="text" id={`b_colonne_${index}`} />
                        </div>
                    </div>
                ))}

                <button type="button" onClick={addInputSet}>Ajouter un ensemble d'inputs</button>
                <button type="button" onClick={(event) => SubmitToCSVtest(event)}>Clique</button>
            </form>
        </div>
    );
}

export default SelectionDP;
