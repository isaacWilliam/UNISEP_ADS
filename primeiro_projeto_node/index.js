nome = 'Isaac';
numero = 200.5;
status = false;

const pesssoas = [];
pesssoas.push('Guilherme', 'Juarez', 'Tiburcio', 'Takamasa Nomuro');
aluno = {
    nome: 'Isaac',
    idade: 21,
    ra: 12354,
    email: 'isaac@gmail.com' 
}

console.log(nome);
console.log('Valor: ', numero);
console.log('Status: ', status);
console.log('Pessoas: ', pesssoas);
console.log('Total de pessoas: ', pesssoas.length);
console.log('Aluno: ', aluno);

// for(const pesssoa of pesssoas){
//     console.log(pesssoa);
// }

// pesssoas.forEach(pessoa => console.log(pessoa)); 

pesssoas.map((valor, index) => {
    if(valor !== 'Guilherme') return;
    console.log(valor);
    
})





