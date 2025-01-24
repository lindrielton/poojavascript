let maquina = {
    material:"ferro",
    equipamentos: ["motor", "freio" , "luzes", "esteira", "cilindros"],
    vaiMonTada: false,
    numeroDeMotores: 2
}

console.log(maquina.material);
console.log(maquina.equipamentos.length);


for(i=0; i < maquina.equipamentos.length; i++){
    console.log(maquina.equipamentos[i]);
}

if(maquina.vaiMonTada === false){
    console.log("vc tera que chamar um proficional na area para montar")
}


if(maquina.numeroDeMotores > 1){
     console.log("esse tipo de maquina tem que ser operada por 2 ou mais funcinarios")
}