import app from './src/controllers/api.js';
import mongoose from 'mongoose';

mongoose
  .connect(
    "mongodb+srv://felipe:M8dZfOPyt6iDjFBM@cluster0.3ha6i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {}
  )
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log("Erro ao conectar", err));

app.listen(3333, () => {
  console.log('http://localhost:3333');
});