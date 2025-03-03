import mongoose from "mongoose";
import EnderecoSchema from "./endereco.js";

const TestSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  endereco: { type: EnderecoSchema, required: true },
  idade: { type: Number, required: true },
  ativo: { type: Boolean, default: true },
  criado_em: { type: Date, default: Date.now },
});

const Usuario = mongoose.model("Test", TestSchema, "test");

export default Usuario;
