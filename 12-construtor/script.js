// uma outra maneira  de configura obijetos
function jogador(nome, posicao){
    this.nome = nome;
    this.posicao = posicao;
    this.chutar =  function(){
        console.log(`partil ${this.nome} chutou i é golllllllllll é do ${this.posicao} ${this.nome}... ` );
    }

}


let jogador1 = new jogador('neymar', 'atacante');

console.log(jogador1.nome);
console.log(jogador1.posicao);
jogador1.chutar();


let jogador2 = new jogador('messi', 'meia-atacante');


console.log(jogador2.nome);
console.log(jogador2.posicao);
jogador2.chutar();





