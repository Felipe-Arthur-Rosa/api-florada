import mongoose from "mongoose";

const StatusSchema = new mongoose.Schema({
  nome: { type: String, required: true },
});

const Status = mongoose.model("Produtos", StatusSchema);

export default Status;
