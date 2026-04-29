/*
Universidad El Bosque
Facultad de Creación y Comunicación
Lenguajes Digitales III

Simulación de Obligaciones Laborales
*/


// Constantes de Cálculo

const $SMMLV = 1750905;
const $SUB_TRANS = 249095; 
const $UVT = 52.37;
const nivelesARL = [0.522, 1.044, 2.436, 4.350, 6.960];


// Variables para pedir al usuario

let nombreCompleto = "";
let edad = 0;
let tipoDocumento = "";
let numeroDocumento = "";
let salario, mesadaPensional, comisiones, horasExtra, nivelRiesgo, ibc, salud, pension, auxilioTrans;
let totalDevengado, totalDeducido, totalPago; 

nombreCompleto = prompt("Escriba su nombre");
tipoDocumento = prompt("Ingrese su Tipo de Documento");
numeroDocumento = prompt("Escriba su Número de Documento");
edad = parseInt(prompt("Ingrese su edad"));


// Funciones

function calcularPorcentaje(base, porcentaje){
  return base * (porcentaje / 100);
}


// Validar Edad

if (edad < 18) {
  alert("No es posible continuar: El usuario es menor de edad.");
}
else if (edad >= 18 && edad < 25) {
  alert("Usuario beneficiario por cotizante. No se calcularán las obligaciones.");
}
else if (edad > 60) {
  mesadaPensional = prompt("Ingrese el valor de su mesada pensional (en COP)");
}
else {

  // Cálculo de obligaciones leborales ---------------------------------------------

  salario = prompt("Ingrese su salario (en COP)");
  comisiones = prompt("Ingrese el valor de sus comisiones, si aplica (en COP)"); 
  horasExtra = prompt("Ingrese el valor de sus hotas extra, si aplica (en COP)");
  
  /*
  nivelRiesgo = parseInt(prompt("Ingrese su nivel de riesgo"));
  switch(nivelRiesgo){
    case

  } 
  */

  totalDevengado = salario + comisiones + horasExtra;
  ibc = calcularPorcentaje(totalDevengado, 0.7);
  salud = calcularPorcentaje(ibc, 0.04);
  fondoSolidaridad = ibc >= $SMMLV * 4 ? calcularPorcentaje(ibc, 0.01) : 0;
  pension = calcularPorcentaje(ibc, 0.04) + fondoSolidaridad;
  auxilioTrans = salario <= $SMMLV * 2 ? $SUB_TRANS : 0;
}