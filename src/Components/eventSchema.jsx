import { z } from "zod";

// Schéma de validation pour un événement
export const eventSchema = z.object({
    name: z.string()
        .min(3, { message: "Le nom doit contenir au moins 3 caractères." }),
    price: z.number()
        .min(1, { message: "Le prix doit être un nombre compris entre 1 et 1000." })
        .max(1000, { message: "Le prix doit être un nombre compris entre 1 et 1000." }),
    description: z.string()
        .min(10, { message: "La description doit contenir au moins 10 caractères." }),
    nbTickets: z.number()
        .min(1, { message: "Le nombre de tickets doit être compris entre 1 et 100." })
        .max(100, { message: "Le nombre de tickets doit être compris entre 1 et 100." }),
    
});