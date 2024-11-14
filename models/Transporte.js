// models/Transporte.js
import mongoose from 'mongoose';

const TransporteSchema = new mongoose.Schema({
    nombre_empresa: { type: String, required: true },
    contacto: { type: String },
    telefono: { type: String },
    tarifa: { type: String },
    tiempo_estimado_entrega: { type: String }
});

export default mongoose.model('Transporte', TransporteSchema);
