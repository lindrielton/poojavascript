// ninja

function ninja(nome){
    this.nome = nome;
    this.atirarShuriken = function(){
        console.log(`atirou a shuriken`);
    }
}


let ninja1 = new ninja('naruto');

console.log(ninja1.nome);
ninja1.atirarShuriken();





