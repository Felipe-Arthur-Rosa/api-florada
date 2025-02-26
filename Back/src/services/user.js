import { read , create } from "../repository/user.js";
import Usuario from "../domain/models/user.js";

async function readService() {
    const resultado = await read();
    return validantityCheck(resultado)
}

async function createService(user) {
  const resultado = await create(user);
  return validantityCheck(resultado)
}

function validantityCheck(resultado) {
  if (
    !resultado || resultado.length === 0
    ) {
    return resultado = {status: 400, body: { error: "Usuário não encontrado" }};
  }
  return resultado = {status: 200, body: resultado};
}

export { readService , createService };