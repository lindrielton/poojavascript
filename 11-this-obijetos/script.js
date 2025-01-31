
let afazeres = {
   manha: ['acordar', 'escovar os dentes', 'tomar banho', 'tomar café'],
   atarde:'estudar',
   familia:['mainha', 'painho', 'maninha'],
   anoite:function(){
      console.log('assistir com a familia')
   },
   integral:function(){
      console.log(`${this.atarde} em  tempo integral..`)
      for(i = 0; i < this.manha.length; i++){
         if(i < 10){
            console.log('sua lista dos afazeres ainda esta incompleta.')
         }
         
      }
   },

  
}

afazeres.integral();

console.log(afazeres.manha);





