import { invoke } from '@tauri-apps/api/tauri';

//Je crée ma fonction qui permet d'envoyer les données du formulaire vers un fichier CSV
export function SubmitToCSVtest() {
    console.log("Je suis dans la fonction SubmitToCSVtest()");
    var ColonneA = document.getElementById("a_colonne").value;
    var ColonneB = document.getElementById("b_colonne").value;

    console.log(ColonneA, ColonneB);



    invoke('create_csv_on_desktop', { colonneA: ColonneA, colonneB: ColonneB });
}

