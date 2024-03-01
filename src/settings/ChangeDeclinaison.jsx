import React, { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

function ChangeDeclinaison() {
    const [files, setFiles] = useState([]);
    const [newText, setNewText] = useState('');
    const [newValue, setNewValue] = useState('');
    const [newOptionCode, setNewOptionCode] = useState('');
    const [newOptionLabel, setNewOptionLabel] = useState('');
    const [newBrief, setNewBrief] = useState('');
    const [newAchatFournisseur, setNewAchatFournisseur] = useState('');
    const [nextId, setNextId] = useState(1);

    useEffect(() => {
        invoke('read_configjson_files').then((jsonFiles) => {
            const parsedFiles = jsonFiles.map(file => ({
                name: file.name,
                content: JSON.parse(file.content)
            }));

            // Trouver le plus grand ID existant dans toutes les entrées
        const maxId = parsedFiles.reduce((max, file) => {
            const maxIdInFile = file.content.reduce((fileMax, entry) => {
                return entry.id && entry.id > fileMax ? entry.id : fileMax;
            }, 0);
            return maxIdInFile > max ? maxIdInFile : max;
        }, 0);


            setFiles(parsedFiles);
            setNextId(maxId + 1);
        }).catch((error) => console.error('Erreur lors de la lecture des fichiers JSON:', error));
    }, []);

    const addOption = (fileIndex, entryIndex) => {
        const newOption = { code: newOptionCode, libellé: newOptionLabel };
        const updatedFiles = [...files];
        updatedFiles[fileIndex].content[entryIndex].options.push(newOption);
        setFiles(updatedFiles);
        saveJsonFile(updatedFiles[fileIndex], fileIndex);
        setNewOptionCode('');
        setNewOptionLabel('');
    };


    const addValueEntry = (fileIndex) => {
        // Définition de l'objet newValueEntry au sein de la fonction addValueEntry
        let newValueEntry = { id: nextId, text: newText, value: newValue };
    
        // Ajout conditionnel de propriétés supplémentaires
        if (newBrief) {
            newValueEntry.brief = newBrief;
        }
    
        if (newAchatFournisseur) {
            newValueEntry.achat_fournisseur = newAchatFournisseur;
        }
    
        const updatedFiles = [...files];
        updatedFiles[fileIndex].content.push(newValueEntry); // Utilisation de newValueEntry à l'intérieur de sa portée
        setFiles(updatedFiles);
        saveJsonFile(updatedFiles[fileIndex], fileIndex);
        // Réinitialisation des champs
        setNewText('');
        setNewValue('');
        setNewBrief('');
        setNewAchatFournisseur('');
        setNextId(nextId + 1); // Mise à jour de l'ID pour la prochaine entrée
    };


    const saveJsonFile = (file, fileIndex) => {
        invoke('save_json_file', { fileName: file.name, content: JSON.stringify(file.content, null, 2) })
            .catch((error) => console.error('Erreur lors de la sauvegarde du fichier JSON:', error));
    };

    const renderEntry = (entry, fileIndex, entryIndex) => {
        const handleRemoveClick = () => {
            const updatedFiles = [...files];
            if ('text' in entry && 'value' in entry) {
                updatedFiles[fileIndex].content.splice(entryIndex, 1);
            } else if ('code' in entry && 'libellé' in entry) {
                updatedFiles[fileIndex].content.splice(entryIndex, 1);
            } else if (entry.type && entry.options) {
                updatedFiles[fileIndex].content.splice(entryIndex, 1);
            }
            setFiles(updatedFiles);
            saveJsonFile(updatedFiles[fileIndex], fileIndex);
            setNextId(nextId + 1);
        };

        return (
            <div key={entryIndex}>
                {'text' in entry && 'value' in entry && (
                    <ul className='option-list'>
                        <li>{entry.text} - {entry.value} <button onClick={handleRemoveClick}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code-minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 12h6" />
                            <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
                            <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
                        </svg></button></li>
                    </ul>
                )}
                {'code' in entry && 'libellé' in entry && (
                    <p>{entry.code} - {entry.libellé} <button onClick={handleRemoveClick}>Supprimer</button></p>
                )}
                {entry.type && entry.options && (
                    <>
                        <h4>Type: {entry.type}</h4>
                        <ul className='option-list'>
                            {entry.options.map((option, index) => (
                                <li key={index}>{option.code} - {option.libellé} <button onClick={() => handleRemoveClick(index, fileIndex)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code-minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 12h6" />
                                    <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
                                    <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
                                </svg></button></li>
                            ))}
                        </ul>
                        <div className='container-input-settings'>
                            <input type="text" placeholder="Code" value={newOptionCode} onChange={e => setNewOptionCode(e.target.value)} />
                            <input type="text" placeholder="Libellé" value={newOptionLabel} onChange={e => setNewOptionLabel(e.target.value)} />
                            <button onClick={() => addOption(fileIndex, entryIndex)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid-add" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M14 17h6m-3 -3v6" />
                            </svg></button>
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <>
            <h1>Changer mes déclinaisons</h1>
            <p className='desc'>C'est ici que tout commence, alimentez vos grilles pour vos prochaines créations.</p>
            <div className='parent-settings'>
                {files.map((file, fileIndex) => (
                    <div key={fileIndex} className="file-block">
                        <h3 className='settings-subtitle'>{file.name}</h3>
                        <ul className='option-list'>
                            {file.content.map((entry, entryIndex) => (
                                renderEntry(entry, fileIndex, entryIndex)
                            ))}
                        </ul>
                        {/* Vérifier si le fichier contient une entrée avec `value` ou une entrée 'brief' avant d'afficher les inputs */}
                        {
                            file.content.some(entry => entry.hasOwnProperty('brief')) ? (
                                <div className='container-input-settings'>
                                    <input type="text" placeholder="Text" value={newText} onChange={e => setNewText(e.target.value)} />
                                    <input type="text" placeholder="Value" value={newValue} onChange={e => setNewValue(e.target.value)} />
                                    <input type="text" placeholder="Code A." value={newBrief} onChange={e => setNewBrief(e.target.value)} />
                                    <input type="text" placeholder="Fournisseur A." value={newAchatFournisseur} onChange={e => setNewAchatFournisseur(e.target.value)} />
                                    <button onClick={() => addValueEntry(fileIndex)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid-add" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M14 17h6m-3 -3v6" />
                                    </svg></button>
                                </div>
                            ) :
                                file.content.some(entry => entry.hasOwnProperty('value')) ? (
                                    <div className='container-input-settings'>
                                        <input type="text" placeholder="Text" value={newText} onChange={e => setNewText(e.target.value)} />
                                        <input type="text" placeholder="Value" value={newValue} onChange={e => setNewValue(e.target.value)} />
                                        <button onClick={() => addValueEntry(fileIndex)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid-add" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                            <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                            <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                            <path d="M14 17h6m-3 -3v6" />
                                        </svg></button>
                                    </div>
                                ) : null
                        }



                        {/*
                        {file.content.some(entry => entry.hasOwnProperty('value')) && (
                            <div className='container-input-settings'>
                                <input type="text" placeholder="Text" value={newText} onChange={e => setNewText(e.target.value)} />
                                <input type="text" placeholder="Value" value={newValue} onChange={e => setNewValue(e.target.value)} />
                                <button onClick={() => addValueEntry(fileIndex)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid-add" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C3C53" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                    <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                    <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                    <path d="M14 17h6m-3 -3v6" />
                                </svg></button>
                            </div>
                        )}
                        */}
                    </div>
                ))}

            </div>
        </>
    );
}

export default ChangeDeclinaison;
