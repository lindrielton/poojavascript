let carro1 = {
    modelo:'bmw',
    acelerar(){
        console.log('aqui, issso depois de pegar a br isso anda..., vrummmmmmmmmmm')
    }
}


let carro2 = {

    modelo:'celta',
    placa:  2234,

}

Object.assign(carro2,carro1);

console.log(carro2);

carro2.acelerar();

console.log(carro1)
