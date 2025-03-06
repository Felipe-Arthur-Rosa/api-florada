import { read, create, uptade, delet } from "../repository/pedido.js";
import ProdutoSchema from "../domain/models/produto.js";
import Status from "../domain/models/status.js";
import EnderecoSchema  from "../domain/models/endereco.js";

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

async function buscaPedido(id) {
    const resultado = await read(id);
    if(!resultado || resultado.length === 0) {
        return { status: 400, body: { error: "Nenhum pedido encontrado" } };
    }
    return { status: 200, body: resultado };
}

async function criaPedido(pedido) {
  try	{
    if (
      !pedido ||
      pedido.nomeCliente === undefined ||
      pedido.nomeCliente == "" ||
      pedido.telefone === undefined ||
      pedido.telefone == "" ||
      pedido.status === undefined ||
      pedido.status.nome == ""
    ) {
      return {
        status: 400,
        body: {
          error: "nomeCliente, telefone e Status são informações obrigatórias!",
        },
      };
    }

    if( pedido.valorFinal === undefined || typeof pedido.valorFinal == Number ||
        pedido.produtos === undefined   || pedido.produtos.length == 0 ||
        pedido.metodoPagamento === undefined || pedido.metodoPagamento == "") {
        return {
            status: 400,
            body: { error: "valorFinal, produtos e metodoPagamento são informações obrigatórias!" },
        };
    }
    const produtos = pedido.produtos
    
    const status = { ...Status.obj, ...pedido.status };
    const endereco =
      pedido.endereco && Object.keys(pedido.endereco).length > 0
        ? { ...EnderecoSchema.obj, ...pedido.endereco }
        : undefined;
     
    const resultado = await create(pedido, produtos, status, endereco);

    if(resultado) {
      return { status: 201, body: resultado };
    }

    return {
      status: 400,
      body: { error: "Não foi possivel criar esse pedido" },
    };

} catch (error) {
    return { status: 500, body: { error: error.message } };
}}


async function atualizaPedido(id, pedido) {
    try	{
    if (
      !pedido ||
      pedido.nomeCliente === undefined ||
      pedido.nomeCliente == "" ||
      pedido.telefone === undefined ||
      pedido.telefone == "" ||
      pedido.status === undefined ||
      pedido.status.nome == ""
    ) {
      return {
        status: 400,
        body: {
          error: "nomeCliente, telefone e Status são informações obrigatórias!",
        },
      };
    }

    if( pedido.valorFinal === undefined || typeof pedido.valorFinal == Number ||
        pedido.produtos === undefined   || pedido.produtos.length == 0 ||
        pedido.metodoPagamento === undefined || pedido.metodoPagamento == "") {
        return {
            status: 400,
            body: { error: "valorFinal, produtos e metodoPagamento são informações obrigatórias!" },
        };
    }
    const produtos = pedido.produtos
    
    const status = { ...Status.obj, ...pedido.status };
    const endereco =
      pedido.endereco && Object.keys(pedido.endereco).length > 0
        ? { ...EnderecoSchema.obj, ...pedido.endereco }
        : undefined;
     
    const resultado = await uptade(id, pedido, produtos, status, endereco);

    if(resultado) {
      return { status: 201, body: resultado };
    }

    return {
      status: 400,
      body: { error: "Não foi possivel criar esse pedido" },
    };

} catch (error) {
    return { status: 500, body: { error: error.message } };
}}

async function deletaPedido(id) {
  if(!id) {
      return { status: 400, body: { error: "id é uma informação obrigatória!" } };
  }
    const resultado = await delet(id);
    if(resultado) {
        return { status: 200, body: { message: "Pedido deletado com sucesso" } };
    }
    return { status: 400, body: { error: "Não foi possivel deletar esse pedido" } };
}

export { readService, createService, updateService, deleteService };