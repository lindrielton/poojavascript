


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


delete pessoa.idade;//operação de lelete

console.log(pessoa.idade); 

pessoa.idade = true;

console.log(pessoa.idade);

delete pessoa.caracteristicas;

console.log(pessoa.caracteristicas);

pessoa.caracteristicas = true;

console.log(pessoa.caracteristicas);



