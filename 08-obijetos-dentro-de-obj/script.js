


let pessoa = {
   idade:20,
   nome:"maycon",
   passaTempo:'futebol',
   passarDosanos(){
      this.idade +=1;
     
   },
   caracteristicas:{
      cnh:true,
      descricao:["negro", "cabelo-liso", "olhos castanhos", 40]
   }
}




console.log(pessoa.caracteristicas.descricao);
console.log(pessoa.caracteristicas.cnh);
console.log(pessoa.caracteristicas.descricao[1]);


let  fizionomia = 'descricao';

console.log(pessoa.caracteristicas[fizionomia]);// para acessar um obijeto dentro de ouitro obijeto é preciso ter cuidado na seguencia;


let lazer = "passaTempo"

console.log(pessoa[lazer]);
