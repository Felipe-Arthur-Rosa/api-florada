import app from './src/api/api.js';
import mongoose from 'mongoose';

mongoose
  .connect("mongodb://localhost:27017/", {})
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log("Erro ao conectar", err));

app.listen(3333, () => {
  console.log('http://localhost:3333');
});