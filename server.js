//"hola mndo"
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import clienteRoutes from './routes/clientes.js';
import transporteRoutes from './routes/transportes.js';
import envioRoutes from './routes/envios.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/seguimientoEnvios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.log(err));

app.use('/api/clientes', clienteRoutes);
app.use('/api/transportes', transporteRoutes);
app.use('/api/envios', envioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
