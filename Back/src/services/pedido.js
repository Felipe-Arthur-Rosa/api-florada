import { read, create, uptade, delet } from "../repository/user.js";

async function readService(id = null) {
    return await buscaPedido(id);
}

async function createService(pedido) {
  return await criaPedido(pedido);
}

async function updateService(id, pedido) {
  return await atualizaPedido(id, pedido);
}

async function deleteService(id) {
  return await deletaPedido(id);
}

export { readService, createService, updateService, deleteService };