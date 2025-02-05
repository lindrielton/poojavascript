
function cachorro(nome,funcao){
    return{
        nome:nome,
        funcao:funcao
    }
}



let descricao = cachorro('bob', 'caçador');

console.log(descricao.constructor);
console.log(descricao)



function atleta(pessoa,sexo){
    this.pessoa = pessoa,
    this.sexo = sexo
}


let usainbolt = new atleta ('usainb', 'mn');

console.log(usainbolt);
console.log(usainbolt.constructor);


let f = {
    texto:'coisa linda',
}

console.log(f);
