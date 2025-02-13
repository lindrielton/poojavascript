// validador






function comparaObijeto(obj1, obj2){
    if(obj1 instanceof obj2){
            console.log(`o obijeto ${obj1.nome} é uma instancia de obijeto ${obj2.name}` );
    }else{
        console.log(`o obijeto ${obj1.nome} não é uma instancia de obijeto ${obj2.name}`  );
    }
}

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



comparaObijeto(ninja1, ninja);
comparaObijeto(akatsuk, ninja);
comparaObijeto(akatsuk, ninja);
comparaObijeto(ninja1, inimigo);
