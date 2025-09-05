import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());

const listaUsuarios = [];

app.get("/", () => {

    response.status(201).send({msg: "Usuários", listaUsuarios});
})

app.get("/login", (request, response) => {

    const usuario = request.body;

    const usuarioLogin = listaUsuarios.find(u => u.nome === usuario.nome && usuario.username == u.username  && u.senha === usuario.senha);
    if(!usuarioLogin){
        response.status(404).send({msg: "Usuário ou senha inválido!!", usuario: usuarioLogin});
        return;
    }
    response.status(201).send({msg: "Login realizado com sucesso!", usuario: usuarioLogin});
})


app.post("/cadastro", (request, response) => {

    const novoUsuario = request.body;

    listaUsuarios.push({...novoUsuario, id: listaUsuarios.length + 1});
    response.status(201).send({msg: "Usuário cadastrado com sucesso!", usuario: novoUsuario});
})

app.listen(port, () => {
    console.log('Rodando pessoas na porta 8080.');
})