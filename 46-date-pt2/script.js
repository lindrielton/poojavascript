//date

let data = new Date();

console.log(data.setMonth(3));

console.log(new Date(data.setMonth(3)));

console.log(new Date(Date.now()));

console.log(Date.parse(new Date(data.setMonth(0))));


