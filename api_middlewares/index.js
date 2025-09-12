import express from 'express';

const app = express();
app.use(express.json());

app.post('/cadastro', [validarCarro], (req, res) => {
    const carro = req.body;   

    return res.status(200).send(carro);
}); 

function validarCarro(req, res, next) {
    const carro = req.body;         

    if (!carro.modelo) {  
        return res.status(400).send({ message: 'Modelo é obrigatório' });
    }   

    if (!carro.ano) {
        return res.status(400).send({ message: 'Ano é obrigatório' });
    }

    if (!carro.cor) {
        return res.status(400).send({ message: 'Cor é obrigatória' });
    }

    return next();
}

app.listen(8080, () => {
  console.log('Rodando na porta 8080');
});