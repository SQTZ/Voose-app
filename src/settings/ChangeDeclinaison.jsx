import React, { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

function ChangeDeclinaison() {
    const [files, setFiles] = useState([]);
    // État pour stocker les valeurs des nouvelles options
    const [newOptionCode, setNewOptionCode] = useState('');
    const [newOptionLabel, setNewOptionLabel] = useState('');

    useEffect(() => {
        invoke('read_configjson_files').then((jsonFiles) => {
            const parsedFiles = jsonFiles.map(file => ({
                name: file.name,
                content: JSON.parse(file.content)
            }));
            setFiles(parsedFiles);
        }).catch((error) => console.error('Erreur lors de la lecture des fichiers JSON:', error));
    }, []);

    const addOption = (fileIndex, itemIndex) => {
        const newOption = { code: newOptionCode, libellé: newOptionLabel };
        const updatedFiles = [...files];
        updatedFiles[fileIndex].content[itemIndex].options.push(newOption);
        setFiles(updatedFiles);
        // Réinitialiser les champs après ajout
        setNewOptionCode('');
        setNewOptionLabel('');
        // Sauvegarder le fichier JSON mis à jour
        saveJsonFile(updatedFiles[fileIndex], fileIndex);
    };

    // Fonction pour sauvegarder le fichier JSON mis à jour
    const saveJsonFile = (file, fileIndex) => {
        invoke('save_json_file', { fileName: files[fileIndex].name, content: JSON.stringify(file.content, null, 2) })
            .catch((error) => console.error('Erreur lors de la sauvegarde du fichier JSON:', error));
    };

    const removeOption = (fileIndex, itemIndex, optionIndex) => {
        const updatedFiles = [...files];
        // Supprime l'option spécifiée
        updatedFiles[fileIndex].content[itemIndex].options.splice(optionIndex, 1);
        setFiles(updatedFiles);
        // Sauvegarde les modifications dans le fichier JSON
        saveJsonFile(updatedFiles[fileIndex], fileIndex);
    };


    return (
        <>
        <h1>Changer mes déclinaisons</h1>
        <p className='desc'>C'est ici que tout commence, alimentez vos grilles pour vos prochaines créations.</p>
        <div className='parent-settings'>
            {files.map((file, fileIndex) => (
                <div key={fileIndex} className="file-block">
                    <h3 className='settings-subtitle'>{file.name}</h3>
                    {file.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                            <h4>{item.type}</h4>
                            <ul className='option-list'>
                                {item.options.map((option, optionIndex) => ( // S'assure que seulement les 5 premières options sont affichées
                                    <li key={optionIndex}>{option.code} - {option.libellé} <button type='button' onClick={() => removeOption(fileIndex, itemIndex, optionIndex)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 7l16 0" />
                                            <path d="M10 11l0 6" />
                                            <path d="M14 11l0 6" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg>
                                    </button></li>
                                ))}
                            </ul>
                            <div className='container-input-settings'>
                                <input
                                    type="text"
                                    placeholder="Code"
                                    value={newOptionCode}
                                    onChange={(e) => setNewOptionCode(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Libellé"
                                    value={newOptionLabel}
                                    onChange={(e) => setNewOptionLabel(e.target.value)}
                                />
                                <button type='button' onClick={() => addOption(fileIndex, itemIndex)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6" />
</svg>
</button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div></>

    );
}

export default ChangeDeclinaison;
