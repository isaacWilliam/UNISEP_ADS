import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());

const listaPessoas = [];

app.get("/", (request, response) => {

    const filtro = request.query.filtro;
    console.log(filtro);

    let listaFiltrada = listaPessoas;
    if(filtro){
        listaFiltrada = listaPessoas.filter(pessoa => pessoa.id == filtro);
    }

    response.send(listaFiltrada);
})


app.post("/cadastro", (request, response) => {

    const novaPessoa = request.body;

    listaPessoas.push({...novaPessoa, id: listaPessoas.length + 1});
    response.status(201).send(novaPessoa);
})

app.put("/atualizar/:id", (request, response) => {
    const id = Number(request.params.id);
    const pessoaAtualizada = request.body;  

    const index = listaPessoas.findIndex(pessoa => pessoa.id == id);

    if(index < 0){
        response.status(404).send({ mensagem: "Pessoa não encontrada." });
        return;
    } 

    listaPessoas[index] = { ...pessoaAtualizada, id: id };
    response.send(listaPessoas[index]);  

})

app.delete("/deletar/:id", (request, response) => { 
    const id = request.params.id;
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id);
    if(index < 0){
        response.status(404).send({ mensagem: "Pessoa não encontrada." });
    } 

    listaPessoas.splice(index, 1);
    response.status(204).send();    

})  

app.listen(port, () => {
    console.log('Rodando pessoas na porta 8080.');
})