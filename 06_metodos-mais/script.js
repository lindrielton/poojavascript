let pessoa = {
   nome:"elton",
   idade:25,
   falar(){
      console.log('olá, tudo bem?');
   },
   niver() {
      this.idade += 1;
   },

   minhaIdade(){
      console.log('minha idade é ' + this.idade);
   },

   abilit(){
      if(this.idade >= 18){
         console.log('apto');
      }else{
         console.log('não apto');
      }
   }
}

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.niver();
console.log(pessoa.idade);
pessoa.niver();
console.log(pessoa.idade); 
pessoa.minhaIdade();
pessoa.abilit();


let calculo = {
   calculadora: 0,
   soma:function(a1,b2){
          this.calculadora = a1+b2;
   },

   subitrair:function(a1){
      this.calculadora -= a1;
   }

}


calculo.soma(10,10);
console.log(calculo.calculadora);

calculo.subitrair(5);
console.log(calculo.calculadora);



