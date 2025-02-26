import mongoose from "mongoose";
import Usuario from "../domain/models/user.js";

async function read() {
    const resultado = await Usuario.find({});
    
    console.log(resultado);
    return resultado;
}

export default read;


// app.post("/usuarios", async (req, res) => {
//   try {
//     const usuario = new Usuario(req.body);
//     await usuario.save();
//     res.status(201).json(usuario);
//   } catch (error) {
//     res.status(400).json({ erro: error.message });
//   }
// });
