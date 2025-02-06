

let moto = {
    peneus : 2
}

console.log(moto.peneus);

let pn = moto;

console.log(pn.peneus);

pn.peneus = 4;

console.log(moto.peneus);// altera ate o original;

console.log(pn.peneus);// alterando qualquer um afeta os dois obijetos.

