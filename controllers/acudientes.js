import db from "../database.js";
const acudientes = db.collection('acudiente');

export const getAll = async (req, res) => {
    try {
        console.log(acudientes);
        const data = await acudientes.find({}).populate('med_consultorio med_especialidad');
        res.status(200).json(data.toArray());
    } catch (err) {
        res.status(500).json({error:err});
    }
}