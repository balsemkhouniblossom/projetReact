import { useState } from "react";

export default function TodoList({ initialTasks }) {
    const [tasks, setTasks] = useState(initialTasks || []); // Liste des tâches initiales
    const [taskName, setTaskName] = useState(""); // Nom de la nouvelle tâche
    const [priority, setPriority] = useState("Moyenne"); // Priorité de la nouvelle tâche
    const [searchQuery, setSearchQuery] = useState(""); // Rechercher une tâche

    // Fonction pour ajouter une nouvelle tâche
    const addTask = () => {
        if (taskName.trim() === "") {
            alert("Le nom de la tâche ne peut pas être vide !");
            return;
        }
        const newTask = { name: taskName, priority: priority, completed: false };
        setTasks([...tasks, newTask]);
        setTaskName("");
        setPriority("Moyenne");
    };

    // Fonction pour marquer une tâche comme terminée
    const markTaskAsCompleted = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: true } : task
        );
        setTasks(updatedTasks);
    };

    // Fonction pour filtrer les tâches basées sur la recherche
    const filteredTasks = tasks.filter((task) =>
        task.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Nombre total de tâches et tâches terminées
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Todo List avec Priorités</h1>

            {/* Formulaire pour ajouter une tâche */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Nom de la tâche"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    style={{ padding: "5px", marginRight: "10px" }}
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    style={{ padding: "5px", marginRight: "10px" }}
                >
                    <option value="Haute">Haute</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Basse">Basse</option>
                </select>
                <button
                    onClick={addTask}
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
            </div>

            {/* Recherche */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Rechercher une tâche"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ padding: "5px", width: "60%" }}
                />
            </div>

            {/* Affichage des tâches */}
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {filteredTasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "10px",
                            padding: "10px",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "5px",
                            textDecoration: task.completed ? "line-through" : "none", // Ligne barrée si la tâche est terminée
                            color: task.completed ? "#888" : "inherit", // Couleur grisée si terminée
                        }}
                    >
                        <span>
                            <strong>{task.name}</strong> - Priorité : {task.priority}
                        </span>
                        <span>
                            {/* Afficher le bouton "Terminer" si la tâche n'est pas terminée */}
                            {!task.completed && (
                                <button
                                    onClick={() => markTaskAsCompleted(index)}
                                    style={{
                                        padding: "5px 10px",
                                        backgroundColor: "#28a745",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Terminer
                                </button>
                            )}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Statistiques */}
            <h2 style={{ marginTop: "20px" }}>
                Total des tâches : {totalTasks} | Tâches terminées : {completedTasks}
            </h2>
        </div>
    );
}
