import mongoose from "mongoose";

const ProdudoSchema = new mongoose.Schema({
  nome:  { type: String, required: true },
  valor: { type: Number, required: true },
});

const Produto = mongoose.model("Produtos", ProdudoSchema);

export default Produto;
