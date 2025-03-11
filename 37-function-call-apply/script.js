
let ap = {
    nome: "lucas",
    idade: 20,
    apresentar(){
        console.log(`o nome da pessoa é ${this.nome}`);
    },
    dataNascimento(){
        let valor = parseInt(this.idade - 2025);
        console.log(`vc nasceo no ano de ${parseFloat(valor)}`);
    }
}


let b = {
    nome:'douglas',
}


ap.apresentar.call(b);
ap.dataNascimento();



