import express from "express";
import cors from "cors";
import {
  readService,
  createService,
  updateService,
  deleteService,
} from "../services/status.js";

const app = express();
app.use(cors());

app.get("/status", async (req, res) => {
  const resultado = await readService();
  res.status(resultado.status).json(resultado.body);
});

app.get("/status/:id", async (req, res) => {
  const resultado = await readService(req.params.id);
  res.status(resultado.status).json(resultado.body);
});

app.post("/status", async (req, res) => {
  const resultado = await createService(req.body);
  res.status(resultado.status).json(resultado.body);
});

app.put("/status/:id", async (req, res) => {
  const resultado = await updateService(req.params.id, req.body);
  res.status(resultado.status).json(resultado.body);
});

app.delete("/status/:id", async (req, res) => {
  const resultado = await deleteService(req.params.id);
  res.status(resultado.status).json(resultado.body);
});
