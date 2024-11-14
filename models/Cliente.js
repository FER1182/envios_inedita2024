import mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String },
    email: { type: String },
    preferencia_transporte: { type: mongoose.Schema.Types.ObjectId, ref: 'Transporte' },
    historial_envios: [
        {
            envio_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Envio' },
            fecha: { type: Date, default: Date.now },
            estado: { type: String, default: 'Pendiente' }
        }
    ]
});

export default mongoose.model('Cliente', ClienteSchema);
