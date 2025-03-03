import mongoose from "mongoose";

const StatusSchema = new mongoose.Schema({
  nome: { type: String, required: true },
});

const Status = mongoose.model("Status", StatusSchema);

export default Status;
