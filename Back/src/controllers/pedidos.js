import express from "express";
import {
  readService,
  createService,
  updateService,
  deleteService,
} from "../services/pedido.js";

const pedidoRoute = express.Router();

pedidoRoute.get("/pedido", async (req, res) => {
  const resultado = await readService();
  res.status(resultado.status).json(resultado.body);
});

pedidoRoute.get("/pedido/:id", async (req, res) => {
  const resultado = await readService(req.params.id);
  res.status(resultado.status).json(resultado.body);
});

pedidoRoute.post("/pedido", async (req, res) => {
  const resultado = await createService(req.body);
  res.status(resultado.status).json(resultado.body);
});

pedidoRoute.put("/pedido/:id", async (req, res) => {
  const resultado = await updateService(req.params.id, req.body);
  res.status(resultado.status).json(resultado.body);
});

pedidoRoute.delete("/pedido/:id", async (req, res) => {
  const resultado = await deleteService(req.params.id);
  res.status(resultado.status).json(resultado.body);
});

export default pedidoRoute;