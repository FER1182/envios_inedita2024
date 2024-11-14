import express from 'express';
import Cliente from '../models/Cliente.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        res.status(201).send(cliente);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.send(clientes);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
