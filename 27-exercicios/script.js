// pessoa

function pessoa(nome){
    this.nome = nome;
    this.metodo = function(){
        console.log(`seu nome é ${this.nome}`);
    }
}


let pessoa1 = new pessoa('elton')
console.log(pessoa1.nome);
pessoa1.metodo();


