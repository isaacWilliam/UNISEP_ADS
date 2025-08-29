import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());

const listaPessoas = [
    {id: 0, nome: "Isaac"},
    {id: 1, nome: "Lucio"},
    {id: 2, nome: "Joarez"},
    {id: 3, nome: "Marcos"},
    {id: 4, nome: "Guilherme"},
]
app.get("/pessoas", (request, response) => {

    const filtro = request.query.filtro;
    console.log(filtro);

    let listaFiltrada = listaPessoas;
    if(filtro){
        listaFiltrada = listaPessoas.filter(pessoa => pessoa.nome.toLocaleLowerCase().includes(filtro));
    }

    response.send(listaFiltrada);
})


app.post("/pessoas/cadastro", (request, response) => {

    const novaPessoa = request.body;
    console.log(novaPessoa);


    listaPessoas.push(novaPessoa);
    response.status(201).send(novaPessoa);
})

app.listen(port, () => {
    console.log('Rodando pessoas na porta 8080.');
})