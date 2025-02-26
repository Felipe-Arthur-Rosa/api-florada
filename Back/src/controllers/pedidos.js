import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/pedidos", async (req, res) => {
  const pedidos = await prisma.pedido.findMany();
  res.status(200).json(pedidos);
}),
  app.get("/pedido:id", async (req, res) => {
    const pedidos = await prisma.pedido.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(pedidos);
  }),
  app.post("/pedido", async (req, res) => {
    if (!pedido || pedido.nomeCliente === undefined) {
      return res.status(400).send({ error: "Pedido não informado" });
    } else {
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
          produtos: {
            create: {
              nome: req.body.produtos.nome,
              valor: req.body.produtos.valor,
            },
          },
        },
      });
      res.status(200).send({ message: "Pedido recebido com sucesso", pedido });
    }
  });

app.put("/pedido/:id", async (req, res) => {
  if (!pedido || pedido.nomeCliente === undefined) {
    return res.status(400).send({ error: "Pedido não informado" });
  } else {
    await prisma.pedido.update({
      where: {
        id: req.body.id,
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
    res.status(200).send({ message: "Pedido Editado com sucesso", pedido });
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
