/*
Si on veux importer que une seule ligne

import { invoke } from '@tauri-apps/api/tauri';

//Je crée ma fonction qui permet d'envoyer les données du formulaire vers un fichier CSV
export function SubmitToCSVtest() {
    console.log("Je suis dans la fonction SubmitToCSVtest()");
    var ColonneA = document.getElementById("a_colonne").value;
    var ColonneB = document.getElementById("b_colonne").value;

    console.log(ColonneA, ColonneB);



    invoke('create_csv_on_desktop', { colonneA: ColonneA, colonneB: ColonneB });
}*/



import { invoke } from '@tauri-apps/api/tauri';

export function SubmitToCSVtest() {
    console.log("Je suis dans la fonction SubmitToCSVtest()");

    // Collecter les valeurs des ensembles d'inputs
    const colonnesA = document.querySelectorAll("[id^='a_colonne_']");
    const colonnesB = document.querySelectorAll("[id^='b_colonne_']");

    const dataForCSV = Array.from(colonnesA).map((colonneA, index) => {
        const colonneB = colonnesB[index];
        return { colonneA: colonneA.value, colonneB: colonneB ? colonneB.value : '' };
    });

    console.log(dataForCSV);

    // Envoi des données à la fonction 'create_csv_on_desktop' de Tauri
    invoke('create_csv_on_desktop', { data: dataForCSV });
}



