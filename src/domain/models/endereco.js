import mongoose from "mongoose";

const EnderecoSchema = new mongoose.Schema({
  rua: { type: String },
  numero: { type: Number },
  bairro: { type: String },
  cidade: { type: String },
  complemento: { type: String },
  dataHoraEntrega: { type: String },
});

export default EnderecoSchema;
