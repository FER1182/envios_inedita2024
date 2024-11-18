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

// Ruta para mostrar todos los clientes


router.get('/', async (req, res) => {
    try {
      console.log("Iniciando consulta a la base de datos...");
      const clients =  Cliente.find();
      console.log("Clientes obtenidos:", clients);
      res.render('clients', { title: 'Clientes', clients });
    } catch (error) {
      console.error('Error al obtener clientes:', error);
      res.status(500).send('Error al obtener clientes');
    }
  });

export default router;
