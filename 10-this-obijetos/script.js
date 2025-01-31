

let ninja = {
   class:'aldeia da folha',
   nome:'kakashi',
   juds:function(){
      console.log(`mil anos de morte! ${this.nome}`)
   }
}


ninja.juds();

let ninja2 = {
   class:'aldeia da folha',
   nome:'kakashi',
   juds:function(){
      console.log(`mil anos de morte! ${this.nome}`)
   },
   atirar:function(){
      for(i = 2; i > 0; i--){
         this.juds()
      }
   }
}


ninja2.atirar();



