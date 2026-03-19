import Pedido from "../domain/models/pedido.js";

async function read(id = null) {
  if (id != null) {
    const resultado = await Pedido.findById(id);
    return resultado;
  }
  const resultado = await Pedido.find({});
  return resultado;
}

async function create(pedido, produtos, status, endereco = null) {
  const resultado = await Pedido.create({
    nomeCliente: pedido.nomeCliente,
    destinatario: pedido.destinatario,
    mensagem: pedido.mensagem,
    telefone: pedido.telefone,
    endereco: endereco,
    metodoPagamento: pedido.metodoPagamento,
    produtos: produtos,
    valorFinal: pedido.valorFinal,
    status: status,
    entregador: pedido.entregador,
  });
  return resultado;
}

async function uptade(id, pedido, produtos, status, endereco = null) {
  const resultado = await Pedido.findByIdAndUpdate(id, {
    nomeCliente: pedido.nomeCliente,
    destinatario: pedido.destinatario,
    mensagem: pedido.mensagem,
    telefone: pedido.telefone,
    metodoPagamento: pedido.metodoPagamento,
    entregador: pedido.entregador,
    endereco: endereco,
    produtos: produtos,
    valorFinal: pedido.valorFinal,
    status: status,
  }, { new: true });
  return resultado;
}

async function delet(id) {
  const resultado = await Pedido.findByIdAndDelete(id);
  return resultado;
}

export { read, create, uptade, delet };
