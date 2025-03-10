function frase(n){
    return n ;
}

console.log(frase('oi!'));


// da outra forma 


test = new Function(
    'a',
    'return arguments'
);

console.log(test('testando')[0]);// não utilizar isso



