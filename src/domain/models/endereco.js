import mongoose from "mongoose";

const EnderecoSchema = new mongoose.Schema({
  rua: { type: String, required: true },
  numero: { type: Number },
  bairro: { type: String, required: true },
  cidade: { type: String, required: true },
  complemento: { type: String },
  dataHoraEntrega: { type: String },
});

export default EnderecoSchema;
