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




/*
import { invoke } from '@tauri-apps/api/tauri';

export function SubmitToCSVtest() {
    console.log("Je suis dans la fonction SubmitToCSVtest()");

    // Collecter les valeurs des ensembles d'inputs
    const nameFile = document.getElementById("name_file").value;

    const colonnesA = document.querySelectorAll("[id^='a_colonne_']");
    const colonnesB = document.querySelectorAll("[id^='b_colonne_']");
    const colonnesC = document.querySelectorAll("[id^='c_colonne_']");
    const colonnesD = document.querySelectorAll("[id^='d_colonne_']");
    const colonnesE = document.querySelectorAll("[id^='e_colonne_']");
    const colonnesF = document.querySelectorAll("[id^='f_colonne_']");
    const colonnesG = document.querySelectorAll("[id^='g_colonne_']");
    const colonnesH = document.querySelectorAll("[id^='h_colonne_']");
    const colonnesI = document.querySelectorAll("[id^='i_colonne_']");
    const colonnesJ = document.querySelectorAll("[id^='j_colonne_']");
    const colonnesK = document.querySelectorAll("[id^='k_colonne_']");
    const colonnesL = document.querySelectorAll("[id^='l_colonne_']");
    const colonnesM = document.querySelectorAll("[id^='m_colonne_']");
    const colonnesN = document.querySelectorAll("[id^='n_colonne_']");
    const colonnesO = document.querySelectorAll("[id^='o_colonne_']");
    const colonnesP = document.querySelectorAll("[id^='p_colonne_']");
    const colonnesQ = document.querySelectorAll("[id^='q_colonne_']");
    const colonnesR = document.querySelectorAll("[id^='r_colonne_']");
    const colonnesS = document.querySelectorAll("[id^='s_colonne_']");
    const colonnesT = document.querySelectorAll("[id^='t_colonne_']");
    const colonnesU = document.querySelectorAll("[id^='u_colonne_']");
    const colonnesV = document.querySelectorAll("[id^='v_colonne_']");
    const colonnesW = document.querySelectorAll("[id^='w_colonne_']");
    const colonnesX = document.querySelectorAll("[id^='x_colonne_']");
    const colonnesY = document.querySelectorAll("[id^='y_colonne_']");
    const colonnesZ = document.querySelectorAll("[id^='z_colonne_']");
    const colonnesAA = document.querySelectorAll("[id^='aa_colonne_']");
    const colonnesAB = document.querySelectorAll("[id^='ab_colonne_']");

    const dataForCSV = Array.from(colonnesA).map((colonneA, index) => {
        const colonneB = colonnesB[index];
        const colonneC = colonnesC[index];
        const colonneD = colonnesD[index];
        const colonneE = colonnesE[index];
        const colonneF = colonnesF[index];
        const colonneG = colonnesG[index];
        const colonneH = colonnesH[index];
        const colonneI = colonnesI[index];
        const colonneJ = colonnesJ[index];
        const colonneK = colonnesK[index];
        const colonneL = colonnesL[index];
        const colonneM = colonnesM[index];
        const colonneN = colonnesN[index];
        const colonneO = colonnesO[index];
        const colonneP = colonnesP[index];
        const colonneQ = colonnesQ[index];
        const colonneR = colonnesR[index];
        const colonneS = colonnesS[index];
        const colonneT = colonnesT[index];
        const colonneU = colonnesU[index];
        const colonneV = colonnesV[index];
        const colonneW = colonnesW[index];
        const colonneX = colonnesX[index];
        const colonneY = colonnesY[index];
        const colonneZ = colonnesZ[index];
        const colonneAA = colonnesAA[index];
        const colonneAB = colonnesAB[index];

 // Vérifier si l'option DE est sélectionnée pour l'ensemble d'inputs courant
 const isDESelected = colonneA && colonneA.value === 'DE';


        const valeurColonneL = colonneL && colonneL.checked ? "VRAI" : "FAUX";
        const valeurColonneM = colonneM && colonneM.checked ? "VRAI" : "FAUX";
// Conditionner les valeurs de colonneN et colonneO en fonction de isDESelected
        const valeurColonneN = isDESelected ? '' : (colonnesN[index] && colonnesN[index].checked ? "VRAI" : "FAUX");
        const valeurColonneO = isDESelected ? '' : (colonnesO[index] && colonnesO[index].checked ? "VRAI" : "FAUX");
        return { colonneA: colonneA.value, colonneB: colonneB ? colonneB.value : '', colonneC: colonneC ? colonneC.value : '', colonneD: colonneD ? colonneD.value : '', colonneE: colonneE ? colonneE.value : '', colonneF: colonneF ? colonneF.value : '', colonneG: colonneG ? colonneG.value : '', colonneH: colonneH ? colonneH.value : '', colonneI: colonneI ? colonneI.value : '', colonneJ: colonneJ ? colonneJ.value : '', colonneK: colonneK ? colonneK.value : '', colonneL: valeurColonneL, colonneM: valeurColonneM, colonneN: valeurColonneN, colonneO: valeurColonneO, colonneP: colonneP ? colonneP.value : '', colonneQ: colonneQ ? colonneQ.value : '', colonneR: colonneR ? colonneR.value : '', colonneS: colonneS ? colonneS.value : '', colonneT: colonneT ? colonneT.value : '', colonneU: colonneU ? colonneU.value : '', colonneV: colonneV ? colonneV.value : '', colonneW: colonneW ? colonneW.value : '', colonneX: colonneX ? colonneX.value : '', colonneY: colonneY ? colonneY.value : '', colonneZ: colonneZ ? colonneZ.value : '', colonneAA: colonneAA ? colonneAA.value : '', colonneAB: colonneAB ? colonneAB.value : '' };
    });

    console.log(dataForCSV);
    console.log(nameFile);

    // Envoi des données à la fonction 'create_csv_on_desktop' de Tauri
    invoke('create_csv_on_desktop', { data: dataForCSV, nameFile: nameFile });
}*/

import { invoke } from '@tauri-apps/api/tauri';

export async function SubmitToCSVtest() { // Notez le mot-clé async ici
    console.log("Je suis dans la fonction SubmitToCSVtest()");

    const nameFile = document.getElementById("name_file").value; // Nom du fichier à créer

    // Collecter les valeurs pour les colonnes de déclinaisons générées
    const colonnesA = document.querySelectorAll("[id^='a_colonne_']");
    const colonnesB = document.querySelectorAll("[id^='b_colonne_']");
    const colonnesC = document.querySelectorAll("[id^='c_colonne_']");
    const colonnesD = document.querySelectorAll("[id^='d_colonne_']");
    const colonnesE = document.querySelectorAll("[id^='e_colonne_']"); // Taille
    const colonnesF = document.querySelectorAll("[id^='f_colonne_']"); // Couleur
    const colonnesG = document.querySelectorAll("[id^='g_colonne_']");
    const colonnesH = document.querySelectorAll("[id^='h_colonne_']");
    const colonnesI = document.querySelectorAll("[id^='i_colonne_']"); // Matière
    const colonnesJ = document.querySelectorAll("[id^='j_colonne_']");
    const colonnesK = document.querySelectorAll("[id^='k_colonne_']");
    const colonnesL = document.querySelectorAll("[id^='l_colonne_']");
    const colonnesM = document.querySelectorAll("[id^='m_colonne_']");
    const colonnesN = document.querySelectorAll("[id^='n_colonne_']");
    const colonnesO = document.querySelectorAll("[id^='o_colonne_']");
    const colonnesP = document.querySelectorAll("[id^='p_colonne_']");
    const colonnesQ = document.querySelectorAll("[id^='q_colonne_']");
    const colonnesR = document.querySelectorAll("[id^='r_colonne_']");
    const colonnesS = document.querySelectorAll("[id^='s_colonne_']");
    const colonnesT = document.querySelectorAll("[id^='t_colonne_']");
    const colonnesU = document.querySelectorAll("[id^='u_colonne_']");
    const colonnesV = document.querySelectorAll("[id^='v_colonne_']");
    const colonnesW = document.querySelectorAll("[id^='w_colonne_']");
    const colonnesX = document.querySelectorAll("[id^='x_colonne_']");
    const colonnesY = document.querySelectorAll("[id^='y_colonne_']");
    const colonnesZ = document.querySelectorAll("[id^='z_colonne_']");
    const colonnesAA = document.querySelectorAll("[id^='aa_colonne_']");
    const colonnesAB = document.querySelectorAll("[id^='ab_colonne_']");

    const dataForCSV = Array.from(colonnesE).map((colonneE, index) => {
        const colonneA = colonnesA[index];
        const colonneB = colonnesB[index];
        const colonneC = colonnesC[index];
        const colonneD = colonnesD[index];
        const taille = colonneE.value;
        const couleur = colonnesF[index] ? colonnesF[index].value : '';
        const colonneG = colonnesG[index];
        const colonneH = colonnesH[index];
        const matière = colonnesI[index] ? colonnesI[index].value : '';
        const colonneJ = colonnesJ[index];
        const colonneK = colonnesK[index];
        const colonneL = colonnesL[index];
        const colonneM = colonnesM[index];
        const colonneN = colonnesN[index];
        const colonneO = colonnesO[index];
        const colonneP = colonnesP[index];
        const colonneQ = colonnesQ[index];
        const colonneR = colonnesR[index];
        const colonneS = colonnesS[index];
        const colonneT = colonnesT[index];
        const colonneU = colonnesU[index];
        const colonneV = colonnesV[index];
        const colonneW = colonnesW[index];
        const colonneX = colonnesX[index];
        const colonneY = colonnesY[index];
        const colonneZ = colonnesZ[index];
        const colonneAA = colonnesAA[index];
        const colonneAB = colonnesAB[index];

        return { colonneA: colonneA ? colonneA.value : '', colonneB: colonneB ? colonneB.value : '', colonneC: colonneC ? colonneC.value : '', colonneD: colonneD ? colonneD.value : '', colonneE: taille, colonneF: couleur, colonneG: colonneG ? colonneG.value : '', colonneH: colonneH ? colonneH.value : '', colonneI: matière, colonneJ: colonneJ ? colonneJ.value : '', colonneK: colonneK ? colonneK.value : '', colonneL: colonneL ? colonneL.value : '', colonneM: colonneM ? colonneM.value : '', colonneN: colonneN ? colonneN.value : '', colonneO: colonneO ? colonneO.value : '', colonneP: colonneP ? colonneP.value : '', colonneQ: colonneQ ? colonneQ.value : '', colonneR: colonneR ? colonneR.value : '', colonneS: colonneS ? colonneS.value : '', colonneT: colonneT ? colonneT.value : '', colonneU: colonneU ? colonneU.value : '', colonneV: colonneV ? colonneV.value : '', colonneW: colonneW ? colonneW.value : '', colonneX: colonneX ? colonneX.value : '', colonneY: colonneY ? colonneY.value : '', colonneZ: colonneZ ? colonneZ.value : '', colonneAA: colonneAA ? colonneAA.value : '', colonneAB: colonneAB ? colonneAB.value : ''};
    });

    console.log(dataForCSV);

    try {
        // Envoi des données à la fonction 'create_csv_on_desktop' de Tauri et attendre que cela soit terminé
        await invoke('create_csv_on_desktop', { data: dataForCSV, nameFile: nameFile });
        console.log('Fichier CSV créé avec succès.');
    } catch (error) {
        console.error('Erreur lors de la création du fichier CSV:', error);
    }
}





