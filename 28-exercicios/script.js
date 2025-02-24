// ninja

function ninja(nome){
    this.nome = nome;
    this.atirarShuriken = function(){
        console.log(`o ninja ${this.nome} atiroua  a shuriquem` );
    }
}


let ninja1 = new ninja('naruto');

console.log(ninja1.nome);
ninja1.atirarShuriken();

let ninja2 = new ninja('gay');
ninja2.atirarShuriken();





