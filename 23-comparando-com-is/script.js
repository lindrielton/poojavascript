let carro1 = {
    modelo:'bmw',
    acelerar(){
        console.log('aqui, issso depois de pegar a br isso anda..., vrummmmmmmmmmm')
    }
}


let carro2 = {
    modelo:'bmw',
    acelerar(){
        console.log('aqui, issso depois de pegar a br isso anda..., vrummmmmmmmmmm')
    }
}
console.log(Object.is(carro1,carro2));


let clone = carro1;

console.log(Object.is(clone,carro1))


console.log(NaN === NaN);// FALSE
console.log(Object.is(NaN,NaN));// TRUE


console.log(+0 === -0);//true
console.log(Object.is(+0,-0));//false



