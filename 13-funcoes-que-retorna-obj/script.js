// funçoes que retornam obijetos;

function carro(portas, cor, marca, lugares, cvalos){
  return{
    portas : portas,
    cor : cor,
    marca : marca,
    lugares : lugares,
    cvalos : cvalos,
    acelerar: function(){
        console.log('vruuuuuunnnnnnnnnnnnnn')
    },
    verificar: function(){
        if(this.cor == 'preto'){
            console.log('executivo')
        }else{
            console.log('o comprador não gostou da cor do carro')
        }
    },
    descricao: function(){
        console.log(`${this.portas} portas, cor ${this.cor}, a marca é ${this.marca}, numeros de lugares ${this.lugares}, tem ${cvalos} cavalos de potencia`);
        
        for(let i = 0 ; i < carro.length ; i++){
            if(i < 10){
               
            }
           
        }
        console.log('ainda faltam muitos requisitos para esse carro ser um carro de luxo')
    }
}
  }


let carro1 = carro(4,'preto','honda', 4, 240);
console.log(carro1.cor);
carro1.descricao();




