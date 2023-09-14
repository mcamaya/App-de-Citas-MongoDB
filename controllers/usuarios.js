import db from "../database.js";
const usuarios = db.collection('usuario');

export const getAll = async (req, res) => {
    try {
        const data = await usuarios.find().sort({usu_nombre:1}).toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({error:err});
    }
}
