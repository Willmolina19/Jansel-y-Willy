let nombre = "William";
let edad = 28;
const soyEstudiante = true;
let sinvalor;
const detail = {
  nombre: "William",
  edad: 25,
  estudiante: true
};

function puedeVotar() {
let edad = prompt("Ingrese su edad actual:")
let anosFaltantes = 18 - edad;
  if (edad >= 18) {
    alert("Puedes votar"); //si la edad puesta por el usuario es mayor a la edad puesta como limite, la funcion alert valida que puede votar
  } else {
    alert(`Te falta ${anosFaltantes} anos`); //si la edad puesta por el usuario es menor a la edad puesta como limite, la funcion alert valida la cantidad faltante de anos del usuario
  }
}

let frutas = ["manzana", "uva", "lechoza"];
for (let fruta of frutas)
{
  console.log(fruta);
}
 

