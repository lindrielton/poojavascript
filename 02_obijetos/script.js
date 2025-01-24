let carro = {
    portas:4,
    cor:"vermelha"
}

console.log(carro.portas);
console.log(carro.cor);

if(carro.portas > 2){
    console.log('seu veiculo tem mais que duas portas')
}

let discricao = carro.cor;
console.log(discricao);


let pessoa = {
    idade: 35,
    sexo: 'masculino',
    cor:'preto'
}

console.log(pessoa["idade"]);

let nomes = pessoa.sexo;
console.log(nomes.length);