import JOI from 'joi';
import 'text-encoding-polyfill'

export const schemaOeuvres = JOI.object({
    nom : JOI.string().min(3).max(255).required(),
    description: JOI.string().min(3).required(),
    image: JOI.string().uri().required(), // Validation d'URL
    auteur: JOI.string().min(3).max(255).required(),
    dateCreation: JOI.date().iso().required(),
    userId: JOI.string().required(),
});
