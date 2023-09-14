import db from "../database.js";
const medicos = db.collection('medico');

export const getAll = async (req, res) => {
    try {
        const data = await medicos.find().toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

export const buscarPorEspecialidad = async (req, res) => {
    try {
        console.log(req.query);
        const {esp} = req.query;
        const especialidadRegex = new RegExp(esp, 'i');
        const data = await medicos.find({med_especialidad: especialidadRegex}).toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({error:err});
    }
}