let rodas = 4;
let peneus = 4;
let cor = 'vermelho';
let modelo = 'caminhonete';


let carro = {
    rodas,
    peneus,
    cor,
    modelo,
    marca: 'toyota',
    ligar(){
        console.log('o carro está ligado')
    }
}

let t = "tipo_de_"

let moto = {
    [t + "moto"]:'ninja'
}

let bike = {
     [t + "bike"]:'corrida'
}


console.log(moto);
console.log(bike)