import Usuario from "../domain/models/user.js";

async function read(id = null) {
    if(id != null){
        const resultado = await Usuario.findById(id);
        return resultado;
    }
    const resultado = await Usuario.find({});
    return resultado;
}

async function create(user, endereco) {
    const usuario = await Usuario.create({ 
        nome: user.nome, 
        email: user.email, 
        idade: user.idade,
        endereco : endereco
    });
    return usuario;
}

async function uptade(id, user, endereco) {
    const usuario = await Usuario.findByIdAndUpdate(id, {
      nome: user.nome,
      email: user.email,
      idade: user.idade,
      endereco: endereco
    });
    return usuario;
}

async function delet(id) {  
    const usuario = await Usuario.findByIdAndDelete(id);
    return usuario;
}

export { read, create, uptade, delet };


// app.post("/usuarios", async (req, res) => {
//   try {
//     const usuario = new Usuario(req.body);
//     await usuario.save();
//     res.status(201).json(usuario);
//   } catch (error) {
//     res.status(400).json({ erro: error.message });
//   }
// });