import Status from "../domain/models/status.js";

async function read(id = null) {
  if (id != null) {
    const resultado = await Status.findById(id);
    return resultado;
  }
  const resultado = await Status.find({});
  return resultado;
}

async function create(status) {
  const resultado = await Status.create({
    status: status.status,
  });
  return resultado;
}

async function uptade(id, status) {
  const resultado = await Status.findByIdAndUpdate(id, {
    status: status.status,
  });
  return resultado;
}

async function delet(id) {
  const resultado = await Status.findByIdAndDelete(id);
  return resultado;
}

export { read, create, uptade, delet };

