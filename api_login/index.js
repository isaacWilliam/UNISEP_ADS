import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());

const listaUsuarios = [];

app.get("/", (request, response) => {

    response.status(200).send(listaUsuarios);
})

app.post("/login", (request, response) => {
    const usuarioCadastrado = listaUsuarios.find(u => request.body.usuario === u.usuario);

    if (!usuarioCadastrado) {
         return response.status(409).send({ msg: "Username não encontrado!!", username: request.body.usuario });
    }

    if (usuarioCadastrado.senha !== request.body.senha) {
        return response.status(400).send({ msg: "Usuário ou senha inválida!!!", senha: request.body.senha });
    }

    if (usuarioCadastrado.username !== request.body.username) {
        return response.status(400).send({ msg: "Usuário ou senha inválida!!!", senha: request.body.senha });
    }

    return response.status(200).send({ msg: "Login realizado com sucesso!", usuario: usuarioCadastrado });
});


app.post("/cadastro", (request, response) => {

    const usarioExiste = listaUsuarios.find( u => u.username == request.body.username);

    if(usarioExiste){
        response.status(409).send({msg: "Username já cadastrado!", username: request.body.username});
        return;
    }

    listaUsuarios.push({...request.body, id: listaUsuarios.length + 1});
    response.status(201).send({msg: "Usuário cadastrado com sucesso!", usuario: request.body});
})

app.listen(port, () => {
    console.log('Rodando login na porta 8080.');
})