import db from "../database.js";
const citas = db.collection('cita');

export const getAll = async (req, res) => {
    try {
        const data = await citas.find({}).sort({"cit_datosUsuario.nombre_completo":1}).toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

export const getOne = async (req, res) => {
    try {
        const {user} = req.params;
        const userRegex = new RegExp(user, 'i');
        const data = await citas.find({"cit_datosUsuario.documento": userRegex}).toArray();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:err.message});
    }
}

export const buscarFechaOrd = async (req, res) => {
    try {
        const { fechaordenada } = req.params;
        const regexFechaOrd = new RegExp(fechaordenada, 'i');
        const data = await citas.find({cit_fecha: regexFechaOrd}).sort({"cit_datosUsuario.nombre_completo":1}).toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

export const getCitasProgramadas = async (req, res) => {
    try {
        const {doc} = req.params;
        const docRegex = new RegExp(doc, 'i');
        const data = await citas.find({"cit_datosUsuario.documento": docRegex , cit_estado: 'Programada'}).sort({cit_fecha:1}).toArray();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:err.message});
    }
}

export const getCitasDoctores = async (req, res) => {
    try {
        const {doctor} = req.params;
        const doctorRegex = new RegExp(doctor, 'i');
        
        if (req.query.num && req.query.date) {
            const {date} = req.query;
            const dateRegex = new RegExp(date, 'i');
            const data = await citas.countDocuments({"cit_medico": doctorRegex, "cit_fecha":dateRegex});
            return res.status(200).json({count: data});
        }
        const data = await citas.find({"cit_medico": doctorRegex}).sort({cit_fecha:1}).toArray();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:err.message});
    }
}

export const buscarFecha = async (req, res) => {
    try {
        const { fecha } = req.params;
        const regexFecha = new RegExp(fecha, 'i');
        const data = await citas.find({cit_fecha: regexFecha}).toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

export const countCitasDoctores = async (req, res) => {
    try {
        const {doctor} = req.params;
        const doctorRegex = new RegExp(doctor, 'i');
        const data = await citas.countDocuments({"cit_medico": doctorRegex}).toArray();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:err.message});
    }
}