import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());

const listaUsuarios = [];

app.get("/", (request, response) => {

    response.status(200).send(listaUsuarios);
})

app.get("/login", (request, response) => {

    const usuarioRequest = request.body;

    const usuarioCadastrado = listaUsuarios.find(u =>  usuarioRequest.usuario == u.usuario);
    if(!usuarioCadastrado){
        response.status(409).send({msg: "Username não encontrado!!", username: usuarioRequest.usuario});
        return;
    }

    if(usuarioCadastrado.senha != usuarioRequest.senha){
        response.status(400).send({msg: "Senha inválida!!!", senha: usuarioRequest.senha});
        return;
    }

    response.status(200).send({msg: "Login realizado com sucesso!", usuario: usuarioCadastrado});
})


app.post("/cadastro", (request, response) => {

    const novoUsuario = request.body;

    const usarioExiste = listaUsuarios.find( u => u.username == novoUsuario.username);

    if(usarioExiste){
        response.status(409).send({msg: "Username já cadastrado!", username: novoUsuario.username});
        return;
    }

    listaUsuarios.push({...novoUsuario, id: listaUsuarios.length + 1});
    response.status(201).send({msg: "Usuário cadastrado com sucesso!", usuario: novoUsuario});
})

app.listen(port, () => {
    console.log('Rodando login na porta 8080.');
})