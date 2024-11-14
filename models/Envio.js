// models/Envio.js
import mongoose from 'mongoose';

const EnvioSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    transporte: { type: mongoose.Schema.Types.ObjectId, ref: 'Transporte', required: true },
    fecha_envio: { type: Date, default: Date.now },
    detalles: { type: String },
    estado: { type: String, default: 'Pendiente' }
});

export default mongoose.model('Envio', EnvioSchema);
