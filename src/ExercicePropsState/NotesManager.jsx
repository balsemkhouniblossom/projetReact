import { useState } from "react";

export default function NotesManager({ initialNotes }) {
    const [notes, setNotes] = useState(initialNotes || []); // State pour la liste des notes
    const [newNote, setNewNote] = useState(""); // State pour la saisie de la nouvelle note

    // Fonction pour ajouter une nouvelle note
    const addNote = () => {
        const note = parseFloat(newNote); // Convertir en nombre
        if (note >= 0 && note <= 20) {
            setNotes([...notes, note]); // Ajouter la note à la liste
            setNewNote(""); // Réinitialiser le champ de saisie
        } else {
            alert("Veuillez entrer une note valide (entre 0 et 20).");
        }
    };

    // Fonction pour supprimer une note spécifique
    const deleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index)); // Supprimer la note à l'index donné
    };

    // Calcul de la moyenne des notes
    const calculateAverage = () => {
        if (notes.length === 0) return 0;
        const sum = notes.reduce((acc, curr) => acc + curr, 0);
        return (sum / notes.length).toFixed(2); // Arrondi à 2 décimales
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Gestionnaire de Notes</h1>

            {/* Champ pour ajouter une nouvelle note */}
            <input
                type="number"
                placeholder="Ajouter une note (0-20)"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                style={{ padding: "5px", marginRight: "10px" }}
            />
            <button
                onClick={addNote}
                style={{
                    padding: "5px 10px",
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Ajouter
            </button>

            {/* Liste des notes */}
            <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
                {notes.map((note, index) => (
                    <li
                        key={index}
                        style={{
                            marginBottom: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                marginRight: "10px",
                                padding: "5px 10px",
                                backgroundColor: "#f0f0f0",
                                borderRadius: "5px",
                            }}
                        >
                            Note {index + 1}: {note}
                        </span>
                        <button
                            onClick={() => deleteNote(index)}
                            style={{
                                padding: "5px 10px",
                                backgroundColor: "#ff4d4d",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>

            {/* Affichage de la moyenne */}
            <h2 style={{ marginTop: "20px" }}>
                Moyenne des Notes: {calculateAverage()}
            </h2>
        </div>
    );
}
