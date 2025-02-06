function pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
}


let pessoa1 = new pessoa('elton', 25);
let pessoa2 = new pessoa('elton', 25);
let clonePessoa = pessoa1;

console.log( pessoa1 === pessoa2);
console.log( clonePessoa == pessoa1);//tomar cuidado
