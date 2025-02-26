import mongoose from "mongoose";
import Endereco from "./endereco";
import Produtos from "./produto";
import Status from "./status";

const PedidoSchema = new mongoose.Schema({
  nomeCliente:      { type: String, required: true },
  destinario:       { type: String },
  telefone:         { type: String, required: true },
  endereco:         { type: Endereco },
  metodoPagamento:  { type: String, required: true },
  produtos:         { type: Produtos, required: true },
  valorFinal:       { type: Number, required: true },
  status:           { type: Status, required: true },
});

const Pedido = mongoose.model("Pedidos", PedidoSchema);

export default Pedido;
