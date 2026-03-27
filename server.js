import "dotenv/config";
import app from './src/controllers/api.js';
import mongoose from 'mongoose';

const port = process.env.PORT || 3333;
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI nao definida no arquivo .env");
}

mongoose
  .connect(mongoUri, {})
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log("Erro ao conectar", err));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
