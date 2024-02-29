import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './components/navbar';

import './styles.css';

function Documentation() {


    return (
        <div className='dashboard-container'>
            <Navbar />

            {/* Ajoutez ici le contenu principal du dashboard à droite */}
            <div className="container-doc">
                <h1>Documentation</h1>
                <div className="doc-container">

                    <li><a href="#introduction">Introduction</a><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link icon-doc" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg></li>
                    <li><a href="#bien-commencer">Bien commencer</a><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link icon-doc" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg></li>
                    <li><a href="#composants">Composants</a><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link icon-doc" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg></li>
                    <li><a href="#exportation">Exportation</a><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link icon-doc" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg></li>
                    <li><a href="#faq">FAQ</a><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link icon-doc" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg></li>



                    <div className='doc-content'>
                        <h2 id="introduction">Introduction<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link link-svg" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 15l6 -6" />
                            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                        </svg></h2>
                        <p>Voose est une solution dédiée à la création efficace de produits sur la plateforme Prestashop en utilisant les données de l'ERP XLSOFT. Cette solution offre une approche pratique et intégrée pour les entreprises cherchant à simplifier leur processus de gestion de produits et à améliorer leur expérience utilisateur.<br/>L'interface conviviale de Voose permet aux utilisateurs de naviguer facilement à travers les fonctionnalités de création de produits sans nécessiter de connaissances techniques approfondies. Cette accessibilité favorise une adoption rapide et une utilisation efficace de la solution.<br/><br/>Voose se distingue par son intégration étroite avec l'ERP XLSOFT. Grâce à cette intégration, Voose peut accéder aux données essentielles stockées dans l'ERP, telles que les informations sur les produits, les prix, les stocks, les descriptions, etc. Cela élimine la nécessité de saisir manuellement ces données dans Prestashop, ce qui réduit considérablement le risque d'erreurs et accélère le processus de création de produits.<br/>La solution offre également des fonctionnalités avancées d'automatisation des processus. Voose peut importer les données de l'ERP et les formater automatiquement selon les exigences de Prestashop. Cette automatisation permet de gagner un temps précieux et de garantir la cohérence des données entre les deux plateformes. En plus de simplifier la création de produits, Voose assure une synchronisation transparente des données entre l'ERP XLSOFT et Prestashop. Cela garantit que toutes les informations sur les produits restent à jour et cohérentes sur les deux plateformes, offrant ainsi une expérience utilisateur homogène pour les clients.<br/>La flexibilité et la personnalisation sont également des aspects importants de Voose. La solution peut être adaptée aux besoins spécifiques de l'entreprise, ce qui permet aux utilisateurs de configurer les paramètres en fonction de leurs processus et workflows uniques.<br/><br/>En conclusion, Voose offre une approche pratique, intégrée et personnalisable pour la création de produits sur Prestashop en utilisant les données de l'ERP XLSOFT. Cette solution simplifie les processus, améliore l'efficacité opérationnelle et contribue à une gestion plus efficace du catalogue de produits en ligne.</p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Documentation;
