import express from 'express';
import { PrismaClient  } from '@prisma/client';
import cors from 'cors';
import {
  readService, createService,
  updateService, deleteService,
} from "../services/user.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get('/user', async (req, res) => {
  const resultado = await readService();
  res.status(resultado.status).json(resultado.body);
});

app.get("/user/:id", async (req, res) => {
  const resultado = await readService(req.params.id);
  res.status(resultado.status).json(resultado.body);
});

app.post('/user', async (req, res) => {
  const resultado = await createService(req.body);
  res.status(resultado.status).json(resultado.body);
});

app.put('/user/:id', async (req, res) => {
  const resultado = await updateService(req.params.id, req.body);
  res.status(resultado.status).json(resultado.body);
});

app.delete('/user/:id', async (req, res) => {
  const resultado = await deleteService(req.params.id);
  res.status(resultado.status).json(resultado.body);
});

export default app;