import EnderecoSchema from "../domain/models/endereco.js";
import { read, create, uptade, delet } from "../repository/user.js";

async function readService(id = null) {
    return await buscaUsuarios(id);
}

async function createService(user) {
  return await criaUsuario(user);
}

async function updateService(id, user) {
  return await atualizaUsuario(id, user);
}

async function deleteService(id) {
  return await deletaUsuario(id);
}

async function buscaUsuarios(id = null) {
  // Chama o Read do Repository
  const resultado = await read(id);

  // Valida Resultados
  if (!resultado || resultado.length === 0) {
    return { status: 400, body: { error: "Nenhum usuario encontrado" } };
  }
  return { status: 200, body: resultado };
}

async function criaUsuario(user) {
  if (
    !user || user.nome === undefined   || user.nome.length == "" ||
    user.email === undefined  || user.email == "") {
    return {
      status: 400,
      body: { error: "id, nome e email são informações obrigatórias!" },
    };
  }

  if (user.idade === undefined || typeof user.idade !== "number") {
    return {
      status: 400,
      body: {
        error: "Idade é uma informação obrigatória e deve ser um número!",
      },
    };
  }

  const endereco = { ...EnderecoSchema.obj, ...user.endereco };

  const resultado = await create(user, endereco);
  if (resultado) {
    return {status: 201, body: resultado};
  }

  return { 
    status: 400,
    body: {
      error: "Nome, email e idade são informações obrigatórias!",
    } 
  };
}

async function atualizaUsuario(id, user) {
  if (!user || user.nome === undefined || user.nome.length == "" || user.email === undefined || user.email == "") {
    return {
      status: 400,
      body: { 
        error: "id, nome e email são informações obrigatórias!" 
      },
    };
  }

  if (user.idade === undefined || typeof user.idade !== "number") {
    return { 
      status: 400, 
      body: { 
        error: "Idade é uma informação obrigatória e deve ser um número!" 
      } 
    };
  }

  await uptade(id, user);
  const resultado = await read(id);

  if (resultado) {
    return { status: 200, body: resultado };
  }

  return { 
    status: 400, 
    body: { 
      error: "Nenhum usuario encontrado" 
    } 
  };
}

async function deletaUsuario(id) {
  if (!id) {
    return { status: 400, body: { error: "Id é uma informação obrigatória!" } };
  }

  const resultado = await delet(id);
  if (resultado) {
    return { status: 200, body: resultado };
  }

  return { 
    status: 400, 
    body: { 
      error: "Nenhum usuario encontrado" 
    } 
  };
}
export { readService, createService, updateService, deleteService };