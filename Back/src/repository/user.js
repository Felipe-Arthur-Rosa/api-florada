import Usuario from "../domain/models/user.js";

async function read() {
    const resultado = await Usuario.find({});
    return resultado;
}

async function create(user) {
    const usuario = await Usuario.create({ 
        nome: user.nome, 
        email: user.email, 
        idade: user.idade 
    });
    return usuario;
}

export { read , create };


// app.post("/usuarios", async (req, res) => {
//   try {
//     const usuario = new Usuario(req.body);
//     await usuario.save();
//     res.status(201).json(usuario);
//   } catch (error) {
//     res.status(400).json({ erro: error.message });
//   }
// });
