//- La fecha de hoy
const fecha = new Date();
console.log(fecha);

//- La fecha de tu nacimiento
const nacimiento = new Date(1992, 09, 12, 00, 05);
console.log(nacimiento);

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let esMasTarde = new Date > nacimiento;
console.log(esMasTarde);

//- Una variable que contenga el día de tu nacimiento
let diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento);

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = nacimiento.getMonth() + 1;
console.log(mesNacimiento);

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let añoNacimiento = nacimiento.getFullYear();
console.log(añoNacimiento);
