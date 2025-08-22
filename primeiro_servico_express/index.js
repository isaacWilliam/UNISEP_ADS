// import express from 'express';

const express = require("express");

const app = express();

const listaAlunos = [
    {id: 0, nome: "Isaac"},
    {id: 1, nome: "Lucio"},
    {id: 2, nome: "Joarez"},
    {id: 3, nome: "Marcos"},
    {id: 4, nome: "Guilherme"},
    {id: 5, nome: "Isaac"},
    {id: 6, nome: "Lucio"},
    {id: 7, nome: "Joarez"},
    {id: 8, nome: "Marcos"},
    {id: 9, nome: "Guilherme"},
    {id: 10, nome: "Isaac"},
    {id: 11, nome: "Lucio"},
    {id: 12, nome: "Joarez"},
    {id: 13, nome: "Marcos"},
    {id: 14, nome: "Guilherme"}
]

// app.get("/alunos", (request, response) => {
//     response.send(listaAlunos);
// }) 

app.get("/alunos", (request, response) => {

    const filtro = request.query.filtro;
    console.log(filtro);
    
    response.send(listaAlunos);
}) 

app.listen(8080, () => {
    console.log('Rodando');
})

