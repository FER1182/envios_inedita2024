//"hola mndo"
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import clienteRoutes from './routes/clientes.js';
import transporteRoutes from './routes/transportes.js';
import envioRoutes from './routes/envios.js';
import { engine } from 'express-handlebars';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/seguimientoEnvios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.log(err));


// Configurar Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve('views'));

// Middleware para archivos estáticos
app.use(express.static(path.resolve('public')));

// Ruta base
app.get('/', (req, res) => {
    res.render('home', { title: 'Bienvenido', message: '¡Hola desde Handlebars!' });
});


app.use('/api/clientes', clienteRoutes);
app.use('/api/transportes', transporteRoutes);
app.use('/api/envios', envioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
