import { read, create, uptade, delet } from "../repository/user.js";

async function readService(id = null) {
  return await buscaStatus(id);
}

async function createService(status) {
  return await criaStatus(status);
}

async function updateService(id, status) {
  return await atualizaStatus(id, status);
}

async function deleteService(id) {
  return await deletaStatus(id);
}

export { readService, createService, updateService, deleteService };
