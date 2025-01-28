let cavalo = {
   patas: 4,
   'foi domesticado':false,
   foiCastrado: true,
   n:'está no tempo de doma',
   galopar: function(){
      console.log('tururuque, tururuque, tururuque, tururuque');
   }
}

cavalo.galopar();
console.log(cavalo);
console.log(cavalo.galopar);// só mostra a função ou metodo que está no objeto!
cavalo.galopar // não vai retornar nada pois a função já não é um propiedade, é sim um metodo.
