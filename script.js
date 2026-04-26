/*
Universidad El Bosque
Facultad de Creación y Comunicación
Lenguajes Digitales III

Simulación de Obligaciones Laborales
*/


//Constantes de Cálculo

const $SMMLV = 1750905;
const $SUB_TRANS = 249095; 
const $UVT = 52.37;


//Variables para pedir al usuario

let nombreCompleto = "";
let edad = 0;
let tipoDocumento = "";
let numeroDocumento = "";
let salario, pension, comisiones, horasExtra, nivelRiesgo;

nombreCompleto = prompt("Escriba su nombre");
tipoDocumento = prompt("Ingrese su Tipo de Documento");
numeroDocumento = prompt("Escriba su Número de Documento");
edad = parseInt(prompt("Ingrese su edad"));


// Validar Edad

if (edad < 18) {
  alert("No es posible continuar: El usuario es menor de edad.");
  }
else if (edad >= 18 && edad < 25) {
  alert("Usuario beneficiario por cotizante. No se calcularán las obligaciones.");
}
else if (edad >= 25 && edad < 60) {
  // Cálculo de obligaciones leborales
  salario = prompt("Ingrese su salario (en COP)");
  comisiones = prompt("Ingrese el valor de sus comisiones, si aplica (en COP)") 
  horasExtra = prompt("Ingrese el valor de sus hotas extra, si aplica (en COP)")
  horasExtra = prompt("Ingrese su nivel de riesgo") 
}

else if (edad > 60) {
  // Pensionado
}