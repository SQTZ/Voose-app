// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::api::file;
use tauri::command;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![create_csv_on_desktop, read_json_file, read_configjson_files, save_json_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn read_json_file(fileName: String) -> Result<String, String> {
    let path = format!("../src-tauri/json/{}.json", fileName);
    std::fs::read_to_string(path)
        .map_err(|e| e.to_string())
}


use tauri::{Window};
use std::fs;
use std::path::{Path, PathBuf};
use std::ffi::OsStr;
use serde::Serialize;

#[derive(Serialize)]
struct JsonFile {
    name: String,
    content: String,
}

#[tauri::command]
fn read_configjson_files() -> Result<Vec<JsonFile>, String> {
    let path = PathBuf::from("json/");

    if !path.exists() || !path.is_dir() {
        return Err("Le chemin spécifié n'existe pas ou n'est pas un dossier".to_string());
    }

    let mut files = Vec::new();

    for entry in fs::read_dir(path).map_err(|e| e.to_string())? {
        let entry = entry.map_err(|e| e.to_string())?;
        let path = entry.path();
        if path.is_file() && path.extension() == Some(OsStr::new("json")) {
            let content = fs::read_to_string(&path).map_err(|e| e.to_string())?;
            let name = path.file_stem().unwrap().to_str().unwrap().to_string();
            files.push(JsonFile { name, content });
        }
    }

    Ok(files)
}


#[tauri::command]
fn save_json_file(file_name: String, content: String) -> Result<(), String> {
    use std::fs::File;
    use std::io::Write;
    let path = format!("json/{}.json", file_name);

    let mut file = File::create(path).map_err(|e| e.to_string())?;
    file.write_all(content.as_bytes()).map_err(|e| e.to_string())?;

    Ok(())
}





/*
Si on veut que une seule ligne 


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
}*/


use std::env::home_dir;
use std::fs::OpenOptions;
use std::io::Write; // Ajoutez cette ligne pour importer le trait Write
use csv::{WriterBuilder, Terminator};
use serde::Deserialize;


#[derive(serde::Deserialize)]
struct InputData {
    colonneA: String,
    colonneB: String,
    colonneC: String,
    colonneD: String,
    colonneE: String,
    colonneF: String,
    colonneG: String,
    colonneH: String,
    colonneI: String,
    colonneJ: String,
    colonneK: String,
    colonneL: String,
    colonneM: String,
    colonneN: String,
    colonneO: String,
    colonneP: String,
    colonneQ: String,
    colonneR: String,
    colonneS: String,
    colonneT: String,
    colonneU: String,
    colonneV: String,
    colonneW: String,
    colonneX: String,
    colonneY: String,
    colonneZ: String,
    colonneAA: String,
    colonneAB: String,
}


#[tauri::command]
fn create_csv_on_desktop(data: Vec<InputData>, nameFile: String) -> Result<(), String> {
    println!("Received name_file: {}", nameFile);
    println!("Received data length: {}", data.len());
    // Construire le chemin vers le bureau de l'utilisateur
    let mut desktop_path = home_dir()
        .ok_or_else(|| "Impossible de trouver le répertoire de l'utilisateur".to_string())?;
    desktop_path.push("Desktop");
    desktop_path.push(nameFile + ".csv");

    // Ouvrir le fichier CSV en mode append
    let mut file = OpenOptions::new()
        .write(true)
        .create(true)
        .append(true)
        .open(&desktop_path)
        .map_err(|_| "Impossible de créer ou d'ouvrir le fichier CSV".to_string())?;

    // Écrire manuellement le BOM UTF-8
    file.write_all(&[0xEF, 0xBB, 0xBF])
        .map_err(|_| "Impossible d'écrire le BOM UTF-8".to_string())?;


        let mut wtr = WriterBuilder::new()
        .delimiter(b';') // Utilisez le point-virgule comme délimiteur
        .from_writer(file);

    // Écrire chaque ensemble de données dans le fichier CSV
    for input_data in data {
        // Utilisez input_data.colonneA et input_data.colonneB directement
        /*if wtr.write_record(&[input_data.colonneA, input_data.colonneB, input_data.colonneC, input_data.colonneD, input_data.colonneE, input_data.colonneF, input_data.colonneG, input_data.colonneH, input_data.colonneI, input_data.colonneJ, input_data.colonneK, input_data.colonneL, input_data.colonneM, input_data.colonneN, input_data.colonneO, input_data.colonneP, input_data.colonneQ, input_data.colonneR, input_data.colonneS, input_data.colonneT, input_data.colonneU, input_data.colonneV, input_data.colonneW, input_data.colonneX, input_data.colonneY, input_data.colonneZ, input_data.colonneAA, input_data.colonneAB]).is_err() {
            return Err("Erreur lors de l'écriture dans le fichier CSV".to_string());
        }*/

        if wtr.write_record(&[input_data.colonneA, input_data.colonneB, input_data.colonneC, input_data.colonneD, input_data.colonneE, input_data.colonneF, input_data.colonneG, input_data.colonneH, input_data.colonneI, input_data.colonneJ, input_data.colonneK, input_data.colonneL, input_data.colonneM, input_data.colonneN, input_data.colonneO, input_data.colonneP, input_data.colonneQ, input_data.colonneR, input_data.colonneS, input_data.colonneT, input_data.colonneU, input_data.colonneV, input_data.colonneW, input_data.colonneX, input_data.colonneY, input_data.colonneZ, input_data.colonneAA, input_data.colonneAB]).is_err() {
            return Err("Erreur lors de l'écriture dans le fichier CSV".to_string());
        }
    }

    if wtr.flush().is_err() {
        return Err("Erreur lors de la sauvegarde du fichier CSV".to_string());
    }

    Ok(())
}
