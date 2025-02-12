// ninja
function ninja(nome , valor, vivo){
    this.nome = nome;
    this.shuriquem  = valor;
    this.vivo = true;
    this.atirarShuriken = function(){
        if(this.shuriquem > 0){
            console.log(`atirou a shuriken`);
            this.vivo = false;
        }
        else{
            console.log('o ninja não tem mais shuriquem ');
        }
    }
}


let ninja1 = new ninja('naruto', 3);

console.log(ninja1.nome);
ninja1.atirarShuriken();
ninja1.atirarShuriken();
ninja1.atirarShuriken();
ninja1.atirarShuriken();


console.log(ninja)


let inimigo = new ninja('pain', true)
console.log(inimigo);
inimigo.atirarShuriken();
console.log(inimigo.vivo);


