// ninja
function ninja(nome, valor){
    this.nome = nome;
    this.shuriquem  = valor;
    this.atirarShuriken = function(inimigo){
        if(this.shuriquem > 0){
            console.log(`atirou a shuriken`);
            this.shuriquem -= 1;
            inimigo.vivo = false;
        }
        else{
            console.log('o ninja não tem mais shuriquem vc não consegui mais matra o inimigo ');

        }
    }
}


function inimigo(nome){
    this.nome = nome;
    this.vivo = true;
}



let ninja1 = new ninja('naruto', 3);

let akatsuk =  new inimigo('obito')

console.log(ninja1);



ninja1.atirarShuriken(akatsuk);

console.log(akatsuk);





