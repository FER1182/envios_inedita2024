// routes/envios.js
import express from 'express';
import Envio from '../models/Envio.js';




const router = express.Router();
// Crear un nuevo envío
router.post('/', async (req, res) => {
    try {
        const envio = new Envio(req.body);
        await envio.save();
        res.status(201).send(envio);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los envíos
router.get('/', async (req, res) => {
    try {
        const envios = await Envio.find().populate('cliente').populate('transporte');
        res.send(envios);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
