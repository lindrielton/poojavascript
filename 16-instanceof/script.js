
// instanseof ele é um metodo muito usado para descobrir de onde um objeto vem e se é se é um obijeto ou vem de outo local.

//ex

function carro(rrodas, aro){
    return{
        rrodas : rrodas,
        aro : aro
    }
}

let carro1 = carro('rrodam', 14);
console.log(carro1 instanceof carro);

function robo(nome,cor){
    this.nome = nome,
    this.cor = cor
}


let novoRobor =  new robo('Optimus Prime', 'vermelho e azul');
console.log(novoRobor instanceof robo);


let escola = {
    nome:'pedro café'
}

console.log(escola instanceof Object);


let arr = [

];

console.log(arr instanceof Array);