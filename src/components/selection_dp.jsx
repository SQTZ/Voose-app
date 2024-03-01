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





import React, { useState, useEffect } from 'react';
import { SubmitToCSVtest } from '../js/functions';
import optionsprde from '../json/optiondp.json';
import optionsfamily from '../../src-tauri/json/optionfamily.json';
import optionstypeproduct from '../../src-tauri/json/optiontypeproduct.json';
import optionssexe from '../../src-tauri/json/optionsexe.json';
import optionsannee from '../../src-tauri/json/optionannee.json';
import optionsmarque from '../../src-tauri/json/optionmarque.json';
import optionsachatfournisseur from '../../src-tauri/json/optionmarque.json';
import optionscategorie from '../../src-tauri/json/optioncategorie.json';
import 'typeface-montserrat';
import { event } from '@tauri-apps/api';
import { availableMonitors } from '@tauri-apps/api/window';
import { transformCallback } from '@tauri-apps/api/tauri';
import SelectionDPtest from './selectiontest';
import Navbar from './navbar';

function SelectionDP() {
    // Chaque élément de inputSets représente un ensemble d'inputs
    const [inputSets, setInputSets] = useState([{ selectedOptionPRDE: 'PR' }]);

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
        const selectedValue = event.target.value;

        // Trouver le hashtag correspondant dans optionsfamily
        const selectedOption = optionsfamily.find(option => option.value === selectedValue);
        const hashtag = selectedOption ? selectedOption.hashtag : '';

        // Mettre à jour l'inputSet avec la famille sélectionnée et son hashtag
        newInputSets[index].selectedOptionFamily = selectedValue;
        newInputSets[index].familyHashtag = hashtag; // Stocker le hashtag pour filtrer les options de S-Famille

        setInputSets(newInputSets);
    };

    // Gestion du changement de sélection pour S-Famille (Type de Produit)
    const handleSelectChangeTypeProduct = (event, index) => {
        const newInputSets = [...inputSets];
        newInputSets[index].selectedOptionTypeProduct = event.target.value;
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
        newInputSets[index].selectedOptionAnnee = event.target.value;
        setInputSets(newInputSets);
    };

    const handleSelectChangeMarque = (event, index) => {
        const newInputSets = [...inputSets];
        const selectedMarqueValue = event.target.value;

        // Trouver l'objet correspondant dans optionsmarque
        const selectedMarqueObj = optionsmarque.find(option => option.value === selectedMarqueValue);
        const briefValue = selectedMarqueObj ? selectedMarqueObj.brief : '';
        const marqueText = selectedMarqueObj ? selectedMarqueObj.text : '';
        const achatFournisseur = selectedMarqueObj ? selectedMarqueObj.achat_fournisseur : '';

        // Mise à jour de la marque dans l'état
        newInputSets[index].selectedOptionMarque = event.target.value;

        // Mise à jour du codeArticle
        const typeProduct = newInputSets[index].selectedOptionTypeProduct || '';
        const annee = newInputSets[index].selectedOptionAnnee || '';
        const lastTwoDigits = annee.length > 2 ? annee.substring(annee.length - 2) : annee;
        newInputSets[index].codeArticle = typeProduct + briefValue + lastTwoDigits;

        // Préfixer la désignation avec le texte de la marque
        const currentDesignation = newInputSets[index].designation || '';
        newInputSets[index].designation = marqueText + " - " + currentDesignation;

        // Mettre à jour automatiquement le sélecteur "Achat Fournisseur" avec la valeur correspondante
        newInputSets[index].selectedOptionAchatFournisseur = achatFournisseur;

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

    /*const handleSelectChangeAchatFournisseur = (event, index) => {
        console.log(event.target.value);
        const newInputSets = [...inputSets];
        newInputSets[index].selectedOptionAchatFournisseur = event.target.value;
        setInputSets(newInputSets);
    };*/


    // Ajouter un nouvel ensemble d'inputs
    const addInputSet = () => {
        setInputSets([...inputSets, {}]);
    };

    const duplicateInputSet = (index) => {
        // Trouver l'ensemble d'inputs à dupliquer
        const inputSetToDuplicate = inputSets[index];

        // Ajouter cet ensemble d'inputs dupliqué à l'état
        setInputSets([...inputSets, { ...inputSetToDuplicate }]);
    };

    // Suprimer un ensemble d'inputs
    const removeInputSet = (index) => {
        // Filtrer l'ensemble d'inputs à supprimer
        const newInputSets = inputSets.filter((_, i) => i !== index);
        setInputSets(newInputSets);
    };

    // Fonction pour réinitialiser le formulaire
    const resetForm = () => {
        setInputSets([{ selectedOptionPRDE: 'PR' }]); // Réinitialise inputSets à un tableau avec un objet vide
        // Réinitialiser les autres états ici, si nécessaire, par exemple :
        setCommercialise("FAUX");
        setStocke("FAUX");
        setDivers("FAUX");
        setTarifaumodele("FAUX");
        // Ajoutez d'autres états à réinitialiser ici
    };

    console.log('jai le fichier', optionsmarque);

    return (
        <div className='dashboard-container'>
            <Navbar />

            <div className="container-create">
                <div className='flexing2'>
                    <div className='container-text'>
                        {/*
                        <div>
                            <a href='/'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 14l-4 -4l4 -4" />
                                <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
                            </svg></a>
                        </div>
                        */}
                        <div>
                            <h1>Créer</h1>
                            <p className='desc'>Pour connaître plus d'informations sur le fonctionnement de la création. Cliquez-ici.</p>
                        </div>
                    </div>

                    <div>
                        <form>
                            <div className='flexing2'>
                                <input type="text" id="name_file" placeholder='Nom de votre fichier'></input>
                                <button type='button' className='box-export' onClick={(event) => SubmitToCSVtest(event)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-export" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                    <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3" />
                                </svg></button>
                            </div>
                        </form>
                    </div>
                </div>
                <form>
                    {inputSets.map((inputSet, index) => (
                        <div key={index} className='block-inputs2'>
                            <div className='vertical-btn'>
                                {inputSets.length > 1 && (
                                    <button type="button" onClick={() => removeInputSet(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 7l16 0" />
                                            <path d="M10 11l0 6" />
                                            <path d="M14 11l0 6" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg>
                                    </button>

                                )}

                                <button type="button" onClick={() => duplicateInputSet(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-files" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                                        <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                                        <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                                    </svg>
                                </button>
                            </div>



                            {inputSet.selectedOptionPRDE !== 'PR' && (
                                <>
                                    {/* Ici, placez les autres inputs qui doivent être affichés lorsque ce n'est pas DE */}

                                    <div className='box'>
                                        <div className='container-input'>
                                            {/* <label htmlFor={`type_${index}`}>PR/DE</label> */}
                                            <select name={`Productordecli_${index}`} className="input-select" id={`a_colonne_${index}`} onChange={(e) => handleSelectChangePRDE(e, index)} value={inputSet.selectedOptionPRDE || ''}>
                                                <option value="">PR / DE</option>
                                                {optionsprde.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.text}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className='texter-btn'>A</div>
                                        </div>


                                        <div className='container-input blocked'>
                                            <input type="text" id={`b_colonne_${index}`} readOnly="readonly" />
                                            <div className='texter-btn'>B</div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`c_${index}`}>Code Barre</label> */}
                                            <input type="text" id={`c_colonne_${index}`} value="<A générer>" />
                                            <div className='texter-btn'>C</div>
                                        </div>
                                    </div>

                                    <div className='container-input blocked'>
                                        {/* <label htmlFor={`d_${index}`}></label> */}
                                        <input type="text" id={`d_colonne_${index}`} readOnly="readonly" />
                                        <div className='texter-btn'>D</div>
                                    </div>

                                    <div className='box'>
                                        <SelectionDPtest />
                                        {/*
                                    <div className='container-input'>
                                        <input type="text" id={`e_colonne_${index}`} placeholder='Taille' />
                                        <div className='texter-btn'>E</div>
                                    </div>

                                    <div className='container-input'>
                                        <input type="text" id={`f_colonne_${index}`} placeholder='Couleur' />
                                        <div className='texter-btn'>F</div>
                                    </div>

                                    <div className='container-input blocked'>
                                        <input type="text" id={`g_colonne_${index}`} readOnly="readonly" />
                                        <div className='texter-btn'>G</div>
                                    </div>

                                    <div className='container-input blocked'>
                                        <input type="text" id={`h_colonne_${index}`} readOnly="readonly" />
                                        <div className='texter-btn'>H</div>
                                    </div>

                                    <div className='container-input'>
                                        <input type="text" id={`i_colonne_${index}`} placeholder='Matière' />
                                        <div className='texter-btn'>I</div>
                                    </div>
                                     */}
                                    </div>

                                    <div className='container-input blocked'>
                                        <input type="text" id={`j_colonne_${index}`} readOnly="readonly" />
                                        <div className='texter-btn'>J</div>
                                    </div>

                                    <div className='container-input blocked'>
                                        <input type="text" id={`k_colonne_${index}`} readOnly="readonly" />
                                        <div className='texter-btn'>K</div>
                                    </div>

                                    <div className='box'>
                                        <div>
                                            <h3>Déclinaison</h3>
                                            <p>Pensez à cocher les deux cases.</p>
                                        </div>


                                        <div className='container-input2'>
                                            {/* <label htmlFor={`commercialise_${index}`}>Commercialisé</label> */}
                                            <label class="toggler-wrapper style-1">
                                                <input type="checkbox"
                                                    id={`l_colonne_${index}`}
                                                    onChange={handleCheckboxChange}
                                                    checked={commercialise === "VRAI"} />
                                                <div class="toggler-slider">
                                                    <div class="toggler-knob"></div>
                                                </div>
                                            </label>
                                            <div className='texter-btn'>L</div>
                                        </div>

                                        <div className='container-input2'>
                                            {/* <label htmlFor={`stocke_${index}`}>Stocké</label> */}
                                            <label class="toggler-wrapper style-1">
                                                <input type="checkbox"
                                                    id={`m_colonne_${index}`}
                                                    onChange={handleCheckboxStockChange}
                                                    checked={stocke === "VRAI"} />
                                                <div class="toggler-slider">
                                                    <div class="toggler-knob"></div>
                                                </div>
                                            </label>
                                            <div className='texter-btn'>M</div>
                                        </div>
                                    </div>


                                    <div className='container-input blocked'>
                                        <input type="text" id={`n_colonne_${index}`} readOnly="readonly" />
                                        <div className='texter-btn'>N</div>
                                    </div>

                                    <div className='container-input blocked'>
                                        <input type="text" id={`o_colonne_${index}`} readOnly="readonly" />
                                        <div className='texter-btn'>O</div>
                                    </div>

                                    <div className='container-input blocked'>
                                        <input type="text" id={`p_colonne_${index}`} readOnly="readonly" />
                                        <div className='texter-btn'>P</div>
                                    </div>

                                    <div className='container-input blocked'>
                                        <input type="text" id={`q_colonne_${index}`} readOnly="readonly" />
                                        <div className='texter-btn'>Q</div>
                                    </div>


                                    <div className='box'>
                                        <div className='container-input'>
                                            {/* <label htmlFor={`prixachatht_${index}`}>Prix Achat HT</label> */}
                                            <input type="text" id={`r_colonne_${index}`} placeholder='Prix Achat HT' />
                                            <div className='texter-btn'>R</div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`remise_${index}`}>Remise</label> */}
                                            <input type="text" id={`s_colonne_${index}`} placeholder='Remise' />
                                            <div className='texter-btn'>S</div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`prixventettc_${index}`}>Prix Vente TTC</label> */}
                                            <input type="text" id={`t_colonne_${index}`} placeholder='Prix Vente TTC' />
                                            <div className='texter-btn'>T</div>
                                        </div>


                                        <div className='container-input blocked'>
                                            {/* <label htmlFor={`methodevalorisationstock_${index}`}>Méthode valorisation Stock</label> */}
                                            <input type="text" id={`u_colonne_${index}`} value={"Prix moyen pondéré d'achat"} />
                                            <div className='texter-btn'>U</div>
                                        </div>
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





                            {inputSet.selectedOptionPRDE !== 'DE' && (
                                <>

                                    <div className='box'>
                                        <div className='container-input'>
                                            {/* <label htmlFor={`type_${index}`}>PR/DE</label> */}
                                            <select name={`Productordecli_${index}`} className="input-select" id={`a_colonne_${index}`} onChange={(e) => handleSelectChangePRDE(e, index)} value={inputSet.selectedOptionPRDE || ''}>
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

                                        <div className='container-input'>
                                            {/* <label htmlFor={`achatreference_${index}`}>Achat Réference</label> */}
                                            <input type="text" id={`q_colonne_${index}`} placeholder='Achat Réference' />
                                            <div className='texter-btn'>Q</div>
                                        </div>
                                    </div>

                                    <div className='box'>
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
                                            {/* <label htmlFor={`edesignation_${index}`}>e-designation</label> */}
                                            <input type="text" id={`ab_colonne_${index}`} value={inputSet.designation || 'E-Désignation'} onChange={(e) => handleDesignationChange(e, index)} />
                                            <div className='texter-btn'>AB</div>
                                        </div>
                                    </div>

                                    <div className='box'>
                                        <div className='flexing'>
                                            <div key={index} className='block-inputs'>
                                                {/* Sélecteur pour Famille */}
                                                <div className='container-input'>
                                                    <select name={`Family_${index}`} id={`f_colonne_${index}`} onChange={(e) => handleSelectChangeFamily(e, index)} value={inputSet.selectedOptionFamily || ''}>
                                                        <option value="">Famille</option>
                                                        {optionsfamily.map(option => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.text}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className='texter-btn'>F</div>
                                                </div>

                                                {/* Sélecteur pour S-Famille, filtré par hashtag de Famille */}
                                                <div className='container-input'>
                                                    <select name={`TypeProduct_${index}`} id={`g_colonne_${index}`} onChange={(e) => handleSelectChangeTypeProduct(e, index)} value={inputSet.selectedOptionTypeProduct || ''}>
                                                        <option value="">S-Famille</option>
                                                        {optionstypeproduct.filter(option => option.hashtag === inputSet.familyHashtag).map(filteredOption => (
                                                            <option key={filteredOption.value} value={filteredOption.value}>
                                                                {filteredOption.text}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className='texter-btn'>G</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flexing'>
                                            <div className='container-input'>
                                                {/* <label htmlFor={`type_${index}`}>Sexe</label> */}
                                                <select name={`Sexe_${index}`} id={`h_colonne_${index}`} onChange={(e) => handleSelectChangeSexe(e, index)} value={inputSet.selectedOptionSexe || ''}>
                                                    <option value="">Sexe</option>
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
                                                    <option value="">Collection</option>
                                                    {optionsannee.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.text}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className='texter-btn'>I</div>
                                            </div>
                                        </div>

                                        <div className='flexing'>
                                            <div className='container-input'>
                                                {/* <label htmlFor={`type_${index}`}>Marque</label> */}
                                                <select name={`Marque_${index}`} id={`j_colonne_${index}`} onChange={(e) => handleSelectChangeMarque(e, index)} value={inputSet.selectedOptionMarque || ''}>
                                                    <option value="">Marque</option>
                                                    {optionsmarque.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.text}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className='texter-btn'>J</div>
                                            </div>

                                            <div className='container-input blocked'>
                                                {/* <label htmlFor={`type_${index}`}>Achat Fournisseur</label> */}
                                                <select name={`achatfournisseur_${index}`} id={`p_colonne_${index}`} onChange={(e) => handleSelectChangeAchatFournisseur(e, index)} value={inputSet.selectedOptionAchatFournisseur || ''}>
                                                    <option value="">Select</option>
                                                    {optionsachatfournisseur.map(option => (
                                                        <option key={option.id} value={option.achat_fournisseur}>
                                                            {option.achat_fournisseur}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className='texter-btn'>P</div>
                                            </div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`type_${index}`}>Catégorie</label> */}
                                            <select name={`Categorie_${index}`} id={`k_colonne_${index}`} onChange={(e) => handleSelectChangeCategorie(e, index)} value={inputSet.selectedOptionCategorie || ''}>
                                                <option value="">Catégorie</option>
                                                {optionscategorie.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.text}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className='texter-btn'>K</div>
                                        </div>
                                    </div>



                                    <div className='box'>
                                        <div>
                                            <h3>Stocks</h3>
                                            <p>Cochez <span>L</span> & <span>M</span> par défaut</p>
                                        </div>
                                        <div className='container-input2'>
                                            {/* <label htmlFor={`commercialise_${index}`}>Commercialisé</label> */}
                                            <label class="toggler-wrapper style-1">
                                                <input type="checkbox"
                                                    id={`l_colonne_${index}`}
                                                    onChange={handleCheckboxChange}
                                                    checked={commercialise === "VRAI"} />
                                                <div class="toggler-slider">
                                                    <div class="toggler-knob"></div>
                                                </div>
                                            </label>
                                            <div className='texter-btn'>L</div>
                                        </div>

                                        <div className='container-input2'>
                                            {/* <label htmlFor={`stocke_${index}`}>Stocké</label> */}
                                            <label class="toggler-wrapper style-1">
                                                <input type="checkbox"
                                                    id={`m_colonne_${index}`}
                                                    onChange={handleCheckboxStockChange}
                                                    checked={stocke === "VRAI"} />
                                                <div class="toggler-slider">
                                                    <div class="toggler-knob"></div>
                                                </div>
                                            </label>
                                            <div className='texter-btn'>M</div>

                                        </div>

                                        <div className='container-input blocked'>
                                            {/* <label htmlFor={`divers_${index}`}>Divers</label> */}
                                            <input
                                                className='checkbox-input'
                                                type="checkbox"
                                                id={`n_colonne_${index}`}
                                                onChange={handleCheckboxDiversChange}
                                                checked={divers === "VRAI"}
                                            />
                                            <div className='texter-btn'>N</div>
                                        </div>

                                        <div className='container-input blocked'>
                                            {/* <label htmlFor={`tarifaumodele_${index}`}>Tarif au Modèle</label> */}
                                            <input
                                                className='checkbox-input'
                                                type="checkbox"
                                                id={`o_colonne_${index}`}
                                                onChange={handleCheckboxTarifAuModeleChange}
                                                checked={tarifaumodele === "VRAI"}
                                            />
                                            <div className='texter-btn'>O</div>
                                        </div>
                                    </div>


                                    <div className='box'>
                                        <div className='container-input'>
                                            {/* <label htmlFor={`prixachatht_${index}`}>Prix Achat HT</label> */}
                                            <input type="text" id={`r_colonne_${index}`} placeholder='Prix Achat HT' />
                                            <div className='texter-btn'>R</div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`remise_${index}`}>Remise</label> */}
                                            <input type="text" id={`s_colonne_${index}`} placeholder='Remise' />
                                            <div className='texter-btn'>S</div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`prixventettc_${index}`}>Prix Vente TTC</label> */}
                                            <input type="text" id={`t_colonne_${index}`} placeholder='Prix Vente TTC' />
                                            <div className='texter-btn'>T</div>
                                        </div>
                                    </div>


                                    <div className='box'>
                                        <div className='container-input'>
                                            {/* <label htmlFor={`grilletaille_${index}`}>Grille Taille</label> */}
                                            <input type="text" id={`v_colonne_${index}`} placeholder='Grille Taille' />
                                            <div className='texter-btn'>V</div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`grillecouleur_${index}`}>Grille Couleur</label> */}
                                            <input type="text" id={`w_colonne_${index}`} placeholder='Grille Couleur' />
                                            <div className='texter-btn'>W</div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`grillematiere_${index}`}>Grille Matière</label> */}
                                            <input type="text" id={`x_colonne_${index}`} placeholder='Grille Matière' />
                                            <div className='texter-btn'>X</div>
                                        </div>
                                    </div>

                                    <div className='box'>
                                        <div className='container-input blocked'>
                                            {/* <label htmlFor={`methodevalorisationstock_${index}`}>Méthode valorisation Stock</label> */}
                                            <input type="text" id={`u_colonne_${index}`} placeholder='Méthode valorisation Stock' />
                                            <div className='texter-btn'>U</div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`ecategorieclubs1_${index}`}>e_catégorie_clubs_1</label> */}
                                            <input type="text" id={`y_colonne_${index}`} placeholder='E-catégorie_clubs_1' value={"6"} />
                                            <div className='texter-btn'>Y</div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`ecategorieclubspardefaut_${index}`}>e_catégorie clubs par défaut</label> */}
                                            <input type="text" id={`z_colonne_${index}`} placeholder='E-Catégorie_clubs_par_défaut' value={"6"} />
                                            <div className='texter-btn'>Z</div>
                                        </div>

                                        <div className='container-input'>
                                            {/* <label htmlFor={`prixconseille_${index}`}>Prix conseillé</label> */}
                                            <input type="text" id={`aa_colonne_${index}`} placeholder='Prix Conseillé' />
                                            <div className='texter-btn'>AA</div>
                                        </div>
                                    </div>


                                </>
                            )}





                        </div>
                    ))}

                    <div className='end-step'>
                        <button type="button" className="btn-event" onClick={addInputSet}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg></button>
                        <button type="button" onClick={resetForm}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 7l16 0" />
                                            <path d="M10 11l0 6" />
                                            <path d="M14 11l0 6" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg></button>
                        {/* <button type="button" className="btn-event" onClick={(event) => SubmitToCSVtest(event)}>Créer</button> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SelectionDP;





