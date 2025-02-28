import mongoose from "mongoose";
import EnderecoSchema from "./endereco.js";
import ProdutoSchema from "./produto.js";
import Status from "./status.js";

const PedidoSchema = new mongoose.Schema({
  nomeCliente: { type: String, required: true },
  destinario: { type: String },
  telefone: { type: String, required: true },
  endereco: { type: EnderecoSchema },
  metodoPagamento: { type: String, required: true },
  produtos: { type: [ProdutoSchema], required: true },
  valorFinal: { type: Number, required: true },
  status: { type: Status.schema, required: true },
});

const Pedido = mongoose.model("Pedidos", PedidoSchema);

export default Pedido;
