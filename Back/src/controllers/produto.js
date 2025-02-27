import express from "express";
import cors from "cors";
import {
  readService,
  createService,
  updateService,
  deleteService,
} from "../services/produto.js";

const app = express();
app.use(cors());

app.get("/produto", async (req, res) => {
  const resultado = await readService();
  res.status(resultado.status).json(resultado.body);
});

app.get("/produto/:id", async (req, res) => {
  const resultado = await readService(req.params.id);
  res.status(resultado.status).json(resultado.body);
});

app.post("/produto", async (req, res) => {
  const resultado = await createService(req.body);
  res.status(resultado.status).json(resultado.body);
});

app.put("/produto/:id", async (req, res) => {
  const resultado = await updateService(req.params.id, req.body);
  res.status(resultado.status).json(resultado.body);
});

app.delete("/produto/:id", async (req, res) => {
  const resultado = await deleteService(req.params.id);
  res.status(resultado.status).json(resultado.body);
});
