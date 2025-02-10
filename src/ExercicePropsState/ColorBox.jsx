import { useState } from "react";

export default function ColorBox(props) {
    // State pour gérer la couleur actuelle
    const [currentColor, setCurrentColor] = useState(props.initialColor);

    // Fonction pour changer la couleur aléatoirement
    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * props.colorOptions.length);
        setCurrentColor(props.colorOptions[randomIndex]);
    };

    return (
        <div style={{ textAlign: "center" }}>
            {/* Boîte carrée avec style dynamique */}
            <div
                style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: currentColor,
                    margin: "20px auto",
                    borderRadius: "8px",
                    border: "2px solid #000",
                }}
            ></div>

            {/* Bouton pour changer de couleur */}
            <button
                onClick={changeColor}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Changer de couleur
            </button>
        </div>
    );
}
