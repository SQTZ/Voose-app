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
import optionsachatfournisseur from '../json/optionmarque.json';
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

    const [stocke, setStocke] = useState("FAUX");

    const handleCheckboxStockChange = (e) => {
        setStocke(e.target.checked ? "VRAI" : "FAUX");
    };

    const [divers, setDivers] = useState("FAUX");

    const handleCheckboxDiversChange = (e) => {
        setDivers(e.target.checked ? "VRAI" : "FAUX");
    };

    const [tarifaumodele, setTarifaumodele] = useState("FAUX");

    const handleCheckboxTarifAuModeleChange = (e) => {
        setTarifaumodele(e.target.checked ? "VRAI" : "FAUX");
    };

    const handleSelectChangeAchatFournisseur = (event, index) => {
        const newInputSets = [...inputSets];
        newInputSets[index].selectedOptionAchatFournisseur = event.target.value;
        setInputSets(newInputSets);
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
                            {/* <label htmlFor={`type_${index}`}>PR/DE</label> */}
                            <select name={`Productordecli_${index}`} id={`a_colonne_${index}`} onChange={(e) => handleSelectChangePRDE(e, index)} value={inputSet.selectedOptionPRDE || ''}>
                                <option value="">PR / DE</option>
                                {optionsprde.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <div className='texter-btn'>A</div>
                        </div>


                        <div className='container-input'>
                            {/* <label htmlFor={`b_${index}`}>Code</label> */}
                            <input type="text" id={`b_colonne_${index}`} value={inputSet.codeArticle || 'Code Article'} onChange={(e) => handleCodeArticleChange(e, index)} />
                            <div className='texter-btn'>B</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`c_${index}`}>Code Barre</label> */}
                            <input type="text" id={`c_colonne_${index}`} value="<A générer>" />
                            <div className='texter-btn'>C</div>
                        </div>

                        <div className='container-input blocked'>
                            {/* <label htmlFor={`d_${index}`}></label> */}
                            <input type="text" id={`d_colonne_${index}`} readOnly="readonly" />
                            <div className='texter-btn'>D</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`e_${index}`}>Désignation</label> */}
                            <input type="text" id={`e_colonne_${index}`} value={inputSet.designation || 'Désignation'} onChange={(e) => handleDesignationChange(e, index)} />
                            <div className='texter-btn'>E</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`type_${index}`}>Famille</label> */}
                            <select name={`Family_${index}`} id={`f_colonne_${index}`} onChange={(e) => handleSelectChangeFamily(e, index)} value={inputSet.selectedOptionFamily || ''}>
                                <option value="">Select</option>
                                {optionsfamily.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <div className='texter-btn'>F</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`type_${index}`}>S-Famille</label> */}
                            <select name={`TypeProduct_${index}`} id={`g_colonne_${index}`} onChange={(e) => handleSelectChangeTypeProduct(e, index)} value={inputSet.selectedOptionTypeProduct || ''}>
                                <option value="">Select</option>
                                {optionstypeproduct.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <div className='texter-btn'>G</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`type_${index}`}>Sexe</label> */}
                            <select name={`Sexe_${index}`} id={`h_colonne_${index}`} onChange={(e) => handleSelectChangeSexe(e, index)} value={inputSet.selectedOptionSexe || ''}>
                                <option value="">Select</option>
                                {optionssexe.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <div className='texter-btn'>H</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`type_${index}`}>Collection</label> */}
                            <select name={`Annee_${index}`} id={`i_colonne_${index}`} onChange={(e) => handleSelectChangeAnnee(e, index)} value={inputSet.selectedOptionAnnee || ''}>
                                <option value="">Select</option>
                                {optionsannee.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <div className='texter-btn'>I</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`type_${index}`}>Marque</label> */}
                            <select name={`Marque_${index}`} id={`j_colonne_${index}`} onChange={(e) => handleSelectChangeMarque(e, index)} value={inputSet.selectedOptionMarque || ''}>
                                <option value="">Select</option>
                                {optionsmarque.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <div className='texter-btn'>J</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`type_${index}`}>Catégorie</label> */}
                            <select name={`Categorie_${index}`} id={`k_colonne_${index}`} onChange={(e) => handleSelectChangeCategorie(e, index)} value={inputSet.selectedOptionCategorie || ''}>
                                <option value="">Select</option>
                                {optionscategorie.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <div className='texter-btn'>K</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`commercialise_${index}`}>Commercialisé</label> */}
                            <input
                                type="checkbox"
                                id={`l_colonne_${index}`}
                                onChange={handleCheckboxChange}
                                checked={commercialise === "VRAI"}
                            />
                            <div className='texter-btn'>L</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`stocke_${index}`}>Stocké</label> */}
                            <input
                                type="checkbox"
                                id={`m_colonne_${index}`}
                                onChange={handleCheckboxStockChange}
                                checked={stocke === "VRAI"}
                            />
                            <div className='texter-btn'>M</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`divers_${index}`}>Divers</label> */}
                            <input
                                type="checkbox"
                                id={`n_colonne_${index}`}
                                onChange={handleCheckboxDiversChange}
                                checked={divers === "VRAI"}
                            />
                            <div className='texter-btn'>N</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`tarifaumodele_${index}`}>Tarif au Modèle</label> */}
                            <input
                                type="checkbox"
                                id={`o_colonne_${index}`}
                                onChange={handleCheckboxTarifAuModeleChange}
                                checked={tarifaumodele === "VRAI"}
                            />
                            <div className='texter-btn'>O</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`type_${index}`}>Achat Fournisseur</label> */}
                            <select name={`achatfournisseur_${index}`} id={`p_colonne_${index}`} onChange={(e) => handleSelectChangeAchatFournisseur(e, index)} value={inputSet.selectedOptionAchatFournisseur || ''}>
                                <option value="">Select</option>
                                {optionsachatfournisseur.map(option => (
                                    <option key={option.value} value={option.achat_fournisseur}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <div className='texter-btn'>P</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`achatreference_${index}`}>Achat Réference</label> */}
                            <input type="text" id={`q_colonne_${index}`} placeholder='Achat Réference'/>
                            <div className='texter-btn'>Q</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`prixachatht_${index}`}>Prix Achat HT</label> */}
                            <input type="text" id={`r_colonne_${index}`} placeholder='Prix Achat HT'/>
                            <div className='texter-btn'>R</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`remise_${index}`}>Remise</label> */}
                            <input type="text" id={`s_colonne_${index}`} placeholder='Remise'/>
                            <div className='texter-btn'>S</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`prixventettc_${index}`}>Prix Vente TTC</label> */}
                            <input type="text" id={`t_colonne_${index}`} placeholder='Prix Vente TTC'/>
                            <div className='texter-btn'>T</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`methodevalorisationstock_${index}`}>Méthode valorisation Stock</label> */}
                            <input type="text" id={`u_colonne_${index}`} placeholder='Méthode valorisation Stock'/>
                            <div className='texter-btn'>U</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`grilletaille_${index}`}>Grille Taille</label> */}
                            <input type="text" id={`v_colonne_${index}`} placeholder='Grille Taille'/>
                            <div className='texter-btn'>V</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`grillecouleur_${index}`}>Grille Couleur</label> */}
                            <input type="text" id={`w_colonne_${index}`} placeholder='Grille Couleur'/>
                            <div className='texter-btn'>W</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`grillematiere_${index}`}>Grille Matière</label> */}
                            <input type="text" id={`x_colonne_${index}`} placeholder='Grille Matière'/>
                            <div className='texter-btn'>X</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`ecategorieclubs1_${index}`}>e_catégorie_clubs_1</label> */}
                            <input type="text" id={`y_colonne_${index}`}  placeholder='E-catégorie_clubs_1'/>
                            <div className='texter-btn'>Y</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`ecategorieclubspardefaut_${index}`}>e_catégorie clubs par défaut</label> */}
                            <input type="text" id={`z_colonne_${index}`} placeholder='E-Catégorie_clubs_par_défaut'/>
                            <div className='texter-btn'>Z</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`prixconseille_${index}`}>Prix conseillé</label> */}
                            <input type="text" id={`aa_colonne_${index}`} placeholder='Prix Conseillé'/>
                            <div className='texter-btn'>AA</div>
                        </div>

                        <div className='container-input'>
                            {/* <label htmlFor={`edesignation_${index}`}>e-designation</label> */}
                            <input type="text" id={`ab_colonne_${index}`} value={inputSet.designation || 'E-Désignation'} onChange={(e) => handleDesignationChange(e, index)}/>
                            <div className='texter-btn'>AB</div>
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
