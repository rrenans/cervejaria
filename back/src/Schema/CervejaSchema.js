import mongoose from 'mongoose';

const CervejaSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('cervejas', CervejaSchema);