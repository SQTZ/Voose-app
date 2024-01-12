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
import optionsprde from '../json/optiondp.json';
import optionsfamily from '../json/optionfamily.json';
import optionstypeproduct from '../json/optiontypeproduct.json';
import optionssexe from '../json/optionsexe.json';
import optionsannee from '../json/optionannee.json';
import optionsmarque from '../json/optionmarque.json';
import optionscategorie from '../json/optioncategorie.json';

function SelectionDP() {
    // Chaque élément de inputSets représente un ensemble d'inputs
    const [inputSets, setInputSets] = useState([{}]);

    // Gestion du changement de sélection pour chaque ensemble d'inputs
    const handleSelectChangePRDE = (event, index) => {
        const newInputSets = [...inputSets];
        newInputSets[index].selectedOptionPRDE = event.target.value;
        setInputSets(newInputSets);
    };

    const handleCodeArticleChange = (event, index) => {
        const newInputSets = [...inputSets];
        newInputSets[index].codeArticle = event.target.value;
        setInputSets(newInputSets);
    };


    const handleDesignationChange = (event, index) => {
        const newInputSets = [...inputSets];
        newInputSets[index].designation = event.target.value;
        setInputSets(newInputSets);
    };

    const handleSelectChangeFamily = (event, index) => {
        const newInputSets = [...inputSets];
        newInputSets[index].selectedOptionFamily = event.target.value;
        setInputSets(newInputSets);
    };

    const handleSelectChangeTypeProduct = (event, index) => {
        const newInputSets = [...inputSets];
        newInputSets[index].selectedOptionTypeProduct = event.target.value;

        // Récupérer les valeurs actuelles
        const annee = newInputSets[index].selectedOptionAnnee || '';
        const marque = newInputSets[index].selectedOptionMarque || '';
        const lastTwoDigits = annee.length > 2 ? annee.substring(annee.length - 2) : annee;

        newInputSets[index].codeArticle = event.target.value + marque + lastTwoDigits;
        setInputSets(newInputSets);
    };

    const handleSelectChangeSexe = (event, index) => {
        const newInputSets = [...inputSets];
        newInputSets[index].selectedOptionSexe = event.target.value;
        setInputSets(newInputSets);
    };

    const handleSelectChangeAnnee = (event, index) => {
        const newInputSets = [...inputSets];
        newInputSets[index].selectedOptionAnnee = event.target.value;

        const typeProduct = newInputSets[index].selectedOptionTypeProduct || '';
        const marque = newInputSets[index].selectedOptionMarque || '';
        const lastTwoDigits = event.target.value.length > 2 ? event.target.value.substring(event.target.value.length - 2) : event.target.value;

        newInputSets[index].codeArticle = typeProduct + marque + lastTwoDigits;
        setInputSets(newInputSets);
    };

    const handleSelectChangeMarque = (event, index) => {
        const newInputSets = [...inputSets];
        const selectedMarqueValue = event.target.value;

        // Trouver l'objet correspondant dans optionsmarque
        const selectedMarqueObj = optionsmarque.find(option => option.value === selectedMarqueValue);
        const briefValue = selectedMarqueObj ? selectedMarqueObj.brief : '';
        const marqueText = selectedMarqueObj ? selectedMarqueObj.text : '';

        // Mise à jour de la marque dans l'état
        newInputSets[index].selectedOptionMarque = briefValue;

        // Mise à jour du codeArticle
        const typeProduct = newInputSets[index].selectedOptionTypeProduct || '';
        const annee = newInputSets[index].selectedOptionAnnee || '';
        const lastTwoDigits = annee.length > 2 ? annee.substring(annee.length - 2) : annee;
        newInputSets[index].codeArticle = typeProduct + briefValue + lastTwoDigits;

        // Préfixer la désignation avec le texte de la marque
        const currentDesignation = newInputSets[index].designation || '';
        newInputSets[index].designation = marqueText + " - " + currentDesignation;

        setInputSets(newInputSets);
    };

    const handleSelectChangeCategorie = (event, index) => {
        const newInputSets = [...inputSets];
        newInputSets[index].selectedOptionCategorie = event.target.value;
        setInputSets(newInputSets);
    };

    const [commercialise, setCommercialise] = useState("FAUX");

const handleCheckboxChange = (e) => {
    setCommercialise(e.target.checked ? "VRAI" : "FAUX");
};
    
    


    // Ajouter un nouvel ensemble d'inputs
    const addInputSet = () => {
        setInputSets([...inputSets, {}]);
    };

    // Suprimer un ensemble d'inputs
    const removeInputSet = (index) => {
        // Filtrer l'ensemble d'inputs à supprimer
        const newInputSets = inputSets.filter((_, i) => i !== index);
        setInputSets(newInputSets);
    };

    return (
        <div>
            <h1>Création du fichier</h1>
            <form>
                {inputSets.map((inputSet, index) => (
                    <div key={index} className='block-inputs'>
                        {inputSets.length > 1 && (
                            <button type="button" onClick={() => removeInputSet(index)}>
                                Supprimer
                            </button>
                        )}

                        <div className='container-input'>
                            <label htmlFor={`type_${index}`}>PR/DE</label>
                            <select name={`Productordecli_${index}`} id={`a_colonne_${index}`} onChange={(e) => handleSelectChangePRDE(e, index)} value={inputSet.selectedOptionPRDE || ''}>
                                <option value="">Select</option>
                                {optionsprde.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div className='container-input'>
                            <label htmlFor={`b_${index}`}>Code</label>
                            <input type="text" id={`b_colonne_${index}`} value={inputSet.codeArticle || ''} onChange={(e) => handleCodeArticleChange(e, index)} />
                        </div>

                        <div className='container-input'>
                            <label htmlFor={`c_${index}`}>Code Barre</label>
                            <input type="text" id={`c_colonne_${index}`} value="<A générer>" />
                        </div>

                        <div className='container-input blocked'>
                            <label htmlFor={`d_${index}`}></label>
                            <input type="text" id={`d_colonne_${index}`} readOnly="readonly" />
                        </div>

                        <div className='container-input'>
                            <label htmlFor={`e_${index}`}>Désignation</label>
                            <input type="text" id={`e_colonne_${index}`} value={inputSet.designation || ''} onChange={(e) => handleDesignationChange(e, index)} />
                        </div>

                        <div className='container-input'>
                            <label htmlFor={`type_${index}`}>Famille</label>
                            <select name={`Family_${index}`} id={`f_colonne_${index}`} onChange={(e) => handleSelectChangeFamily(e, index)} value={inputSet.selectedOptionFamily || ''}>
                                <option value="">Select</option>
                                {optionsfamily.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='container-input'>
                            <label htmlFor={`type_${index}`}>S-Famille</label>
                            <select name={`TypeProduct_${index}`} id={`g_colonne_${index}`} onChange={(e) => handleSelectChangeTypeProduct(e, index)} value={inputSet.selectedOptionTypeProduct || ''}>
                                <option value="">Select</option>
                                {optionstypeproduct.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='container-input'>
                            <label htmlFor={`type_${index}`}>Sexe</label>
                            <select name={`Sexe_${index}`} id={`h_colonne_${index}`} onChange={(e) => handleSelectChangeSexe(e, index)} value={inputSet.selectedOptionSexe || ''}>
                                <option value="">Select</option>
                                {optionssexe.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='container-input'>
                            <label htmlFor={`type_${index}`}>Collection</label>
                            <select name={`Annee_${index}`} id={`i_colonne_${index}`} onChange={(e) => handleSelectChangeAnnee(e, index)} value={inputSet.selectedOptionAnnee || ''}>
                                <option value="">Select</option>
                                {optionsannee.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='container-input'>
                            <label htmlFor={`type_${index}`}>Marque</label>
                            <select name={`Marque_${index}`} id={`j_colonne_${index}`} onChange={(e) => handleSelectChangeMarque(e, index)} value={inputSet.selectedOptionMarque || ''}>
                                <option value="">Select</option>
                                {optionsmarque.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='container-input'>
                            <label htmlFor={`type_${index}`}>Catégorie</label>
                            <select name={`Categorie_${index}`} id={`k_colonne_${index}`} onChange={(e) => handleSelectChangeCategorie(e, index)} value={inputSet.selectedOptionCategorie || ''}>
                                <option value="">Select</option>
                                {optionscategorie.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='container-input'>
    <label htmlFor={`commercialise_${index}`}>Commercialisé</label>
    <input 
        type="checkbox" 
        id={`l_colonne_${index}`} 
        onChange={handleCheckboxChange}
        checked={commercialise === "VRAI"}
    />
</div>


                    </div>
                ))}

                <div className='end-step'>
                    <button type="button" className="btn-event" onClick={addInputSet}>Ajouter</button>
                    <button type="button" className="btn-event" onClick={(event) => SubmitToCSVtest(event)}>Créer</button>
                </div>
            </form>
        </div>
    );
}

export default SelectionDP;
