import express from "express";
const statusRoute = express.Router();

import {
  readService,
  createService,
  updateService,
  deleteService,
} from "../services/status.js";

statusRoute.get("/status", async (req, res) => {
  const resultado = await readService();
  res.status(resultado.status).json(resultado.body);
});

statusRoute.get("/status/:id", async (req, res) => {
  const resultado = await readService(req.params.id);
  res.status(resultado.status).json(resultado.body);
});

statusRoute.post("/status", async (req, res) => {
  const resultado = await createService(req.body);
  res.status(resultado.status).json(resultado.body);
});

statusRoute.put("/status/:id", async (req, res) => {
  const resultado = await updateService(req.params.id, req.body);
  res.status(resultado.status).json(resultado.body);
});

statusRoute.delete("/status/:id", async (req, res) => {
  const resultado = await deleteService(req.params.id);
  res.status(resultado.status).json(resultado.body);
});

export default statusRoute; 
