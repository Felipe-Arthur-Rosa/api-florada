import { read, create, uptade, delet } from "../repository/status.js";

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

async function buscaStatus(id) {
  const resultado = await read(id);
  if(!resultado) {
    return { status: 404, body: { error: "Status não encontrado" } };
  }
  return { status: 200, body: resultado };
}

async function criaStatus(status) {
  if (status.nome === undefined || status.nome === null || status.nome === "") {
    return { status: 400, body: { error: "Status não informado" } };
  }
  const resultado = await create(status);
  return { status: 200, body: resultado };
}

async function atualizaStatus(id, status) {
  if (status.nome === undefined || status.nome === null || status.nome === "") {
    return { status: 400, body: { error: "Status não informado" } };
  }
  await uptade(id, status);
  const resultado = await buscaStatus(id);
  return { status: 200, body: resultado };
}

async function deletaStatus(id) {
  if(!id) {
    return { status: 400, body: { error: "Id não informado" } };
  }
  const resultado = await delet(id);
  return  { status: 200, body: { message: "Status deletado com sucesso: " + resultado.status} };
}

export { readService, createService, updateService, deleteService };
