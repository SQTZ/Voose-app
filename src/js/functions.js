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
    const colonnesC = document.querySelectorAll("[id^='c_colonne_']");
    const colonnesD = document.querySelectorAll("[id^='d_colonne_']");
    const colonnesE = document.querySelectorAll("[id^='e_colonne_']");
    const colonnesF = document.querySelectorAll("[id^='f_colonne_']");
    const colonnesG = document.querySelectorAll("[id^='g_colonne_']");
    const colonnesH = document.querySelectorAll("[id^='h_colonne_']");
    const colonnesI = document.querySelectorAll("[id^='i_colonne_']");

    const dataForCSV = Array.from(colonnesA).map((colonneA, index) => {
        const colonneB = colonnesB[index];
        const colonneC = colonnesC[index];
        const colonneD = colonnesD[index];
        const colonneE = colonnesE[index];
        const colonneF = colonnesF[index];
        const colonneG = colonnesG[index];
        const colonneH = colonnesH[index];
        const colonneI = colonnesI[index];
        return { colonneA: colonneA.value, colonneB: colonneB ? colonneB.value : '', colonneC: colonneC ? colonneC.value : '', colonneD: colonneD ? colonneD.value : '', colonneE: colonneE ? colonneE.value : '', colonneF: colonneF ? colonneF.value : '', colonneG: colonneG ? colonneG.value : '', colonneH: colonneH ? colonneH.value : '', colonneI: colonneI ? colonneI.value : '' };
    });

    console.log(dataForCSV);

    // Envoi des données à la fonction 'create_csv_on_desktop' de Tauri
    invoke('create_csv_on_desktop', { data: dataForCSV });
}



