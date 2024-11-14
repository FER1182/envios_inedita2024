// routes/transportes.js
import express from 'express';
import Transporte from '../models/Transporte.js';
const router = express.Router();

// Crear un nuevo transporte
router.post('/', async (req, res) => {
    try {
        const transporte = new Transporte(req.body);
        await transporte.save();
        res.status(201).send(transporte);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los transportes
router.get('/', async (req, res) => {
    try {
        const transportes = await Transporte.find();
        res.send(transportes);
    } catch (error) {
        res.status(500).send(error);
    }
});


export default router;
