import { read, create, uptade, delet } from "../repository/user.js";

async function readService(id = null) {
  return await buscaProduto(id);
}

async function createService(produto) {
  return await criaProduto(produto);
}

async function updateService(id, produto) {
  return await atualizaProduto(id, produto);
}

async function deleteService(id) {
  return await deletaProduto(id);
}

export { readService, createService, updateService, deleteService };
