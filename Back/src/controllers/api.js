import express from 'express';
import { PrismaClient  } from '@prisma/client';
import cors from 'cors';
import { readService, createService } from "../services/user.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get('/user', async (req, res) => {
  const resultado = await readService();
  res.status(resultado.status).json(resultado.body);
});

app.post('/user', async (req, res) => {
  const resultado = await createService(req.body);
  res.status(resultado.status).json(resultado.body);
});

// PEDIDOS

app.get('/pedidos', async (req, res) => {
    const pedidos = await prisma.pedido.findMany();
    res.status(200).json(pedidos);
}),

app.get('/pedido:id', async (req, res) => {
    const pedidos = await prisma.pedido.findUnique({
        where: {
            id: req.params.id
        }});
    res.status(200).json(pedidos);
}),

app.post('/pedido', async (req, res) => {
    if (!pedido || pedido.nomeCliente === undefined) {
      return res.status(400).send({ error: "Pedido não informado" });
    } 
    else {    
        await prisma.pedido.create({
            data: {
                nomeCliente: req.body.nomeCliente,
                destinatario: req.body.destinatario,
                telefone: req.body.telefone,
                endereco: {
                  create: {
                    rua: req.body.endereco.rua,
                    numero: req.body.endereco.numero,
                    bairro: req.body.endereco.bairro,
                    cidade: req.body.endereco.cidade,
                    complemento: req.body.endereco.complemento,
                    dataHoraEntrega: req.body.endereco.dataHoraEntrega,
                  },
                },
                metodoPagamento: req.body.metodoPagamento,
                valorFinal: req.body.valorFinal,
                status: req.body.status,
                produtos : {
                  create: {
                      nome: req.body.produtos.nome,
                      valor: req.body.produtos.valor
                    }
                },
            }
        });
        res.status(200).send({message: 'Pedido recebido com sucesso', pedido});
    }
});

app.put("/pedido/:id", async (req, res) => {
  if (!pedido || pedido.nomeCliente === undefined) {
    return res.status(400).send({ error: "Pedido não informado" });
  } else {
    await prisma.pedido.update({
        where : { 
            id: req.body.id 
        },
        data: {
          nomeCliente: req.body.nomeCliente,
          destinatario: req.body.destinatario,
          telefone: req.body.telefone,
          endereco: {
            create: {
              rua: req.body.endereco.rua,
              numero: req.body.endereco.numero,
              bairro: req.body.endereco.bairro,
              cidade: req.body.endereco.cidade,
              complemento: req.body.endereco.complemento,
              dataHoraEntrega: req.body.endereco.dataHoraEntrega,
            },
          },
          metodoPagamento: req.body.metodoPagamento,
          valorFinal: req.body.valorFinal,
          status: req.body.status,
          produtos: {
            create: {
              nome: req.body.produtos.nome,
              valor: req.body.produtos.valor,
            },
          },
        },
    });
    res.status(200).send({ message: "Pedido Editado com sucesso", pedido});
  }
});

app.delete("/pedido/:id", async (req, res) => {
    await prisma.pedido.delete({
        where: {
        id: req.params.id,
        },
    });
    res.status(200).send({ message: "Pedido deletado com sucesso" });
});


// PRODUTOS

app.get('/produtos', async (req, res) => {
    const produtos = await prisma.produto.findMany();
    res.status(200).json(produtos);
}),

app.get('/produto:id', async (req, res) => {
    const produto = await prisma.produto.findUnique({
        where: {
            id: req.params.id
        }});
    res.status(200).json(produto);
}),

app.post('/produto', async (req, res) => {
    if (!produto || produto.nome === undefined) {
      return res.status(400).send({ error: "Produto não informado" });
    } else {
        await prisma.produto.create({
            data: {
                nome: req.body.nome,
                valor: req.body.valor
            }
        });
        res.status(200).send({message: 'Produto cadastrado com sucesso', produto});
    }
});

app.put('/produto:id', async (req, res) => {
  if (!produto || produto.nome === undefined) {
    return res.status(400).send({ error: "Produto não informado" });
  } else {
    await prisma.produto.update({
        where: {
            id: req.params.id
        },
      data: {
        nome: req.body.nome,
        valor: req.body.valor,
      },
    });
    res
      .status(200)
      .send({ message: "Produto cadastrado com sucesso", produto });
  }
});

app.delete('/produto/:id', async (req, res) => {
    await prisma.produto.delete({
        where: {
        id: req.params.id,
        },
    });
    res.status(200).send({ message: "Produto deletado com sucesso" });
});


// STATUS

app.get('/status', async (req, res) => {
    const status = await prisma.status.findMany();
    res.status(200).json(status);
}),

app.get('/status:id', async (req, res) => {
    const status = await prisma.status.findUnique({
        where: {
            id: req.params.id
        }});
    res.status(200).json(status);
}),

app.post('/status', async (req, res) => {
    await prisma.status.create({
      data: {
        status: req.body.status,
      },
    });
    res.status(200).send({message: 'Status cadastrado com sucesso', status});
});

app.put('/status:id', async (req, res) => {
  await prisma.status.update({
      where: {
          id: req.params.id
      },
    data: {
      status: req.body.status,
    },
  });
  res.status(200).send({ message: "Status cadastrado com sucesso", "Response_Status" : status });
});

app.delete('/status/:id', async (req, res) => { 
    await prisma.status.delete({
        where: {
        id: req.params.id,
        },
    });
    res.status(200).send({ message: "Status deletado com sucesso" });
});

export default app;