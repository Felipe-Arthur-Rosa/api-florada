import mongoose from "mongoose";

const EnderecoSchema = new mongoose.Schema({
  rua:              { type: String, required: true },
  numero:           { type: Int16Array },
  bairro:           { type: String, required: true },
  cidade:           { type: String, required: true },
  complemento:      { type: String },
  dataHoraEntrega:  { type: String },
});

const Endereco = mongoose.model("Enderecos", EnderecoSchema);

export default Endereco;
