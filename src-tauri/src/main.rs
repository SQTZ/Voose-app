// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::command;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![create_csv_on_desktop])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


use tauri::api::path::home_dir;
use std::path::PathBuf;

#[tauri::command]
fn create_csv_on_desktop(colonneA: String, colonneB: String) -> Result<(), String> {
    // Construire le chemin vers le bureau de l'utilisateur
    let mut desktop_path = match home_dir() {
        Some(path) => PathBuf::from(path),
        None => return Err("Impossible de trouver le répertoire de l'utilisateur".to_string()),
    };
    desktop_path.push("Desktop");
    desktop_path.push("mon_fichier.csv");

    // Créer le fichier CSV
    let mut wtr = match csv::Writer::from_path(&desktop_path) {
        Ok(file) => file,
        Err(_) => return Err("Impossible de créer le fichier CSV".to_string()),
    };
    if wtr.write_record(&[colonneA, colonneB]).is_err() {
        return Err("Erreur lors de l'écriture dans le fichier CSV".to_string());
    }
    if wtr.flush().is_err() {
        return Err("Erreur lors de la sauvegarde du fichier CSV".to_string());
    }

    Ok(())
}

