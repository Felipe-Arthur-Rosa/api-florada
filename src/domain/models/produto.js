import mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
});

export default ProdutoSchema;
