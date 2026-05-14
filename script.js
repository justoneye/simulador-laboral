/*
Universidad El Bosque
Facultad de Creación y Comunicación
Lenguajes Digitales III

Simulación de Obligaciones Laborales
*/



// Constantes de Cálculo

const $SMMLV = 1750905;
const $SUBSIDIO_TRANS = 249095; 
const $UVT = 52.37;
const nivelesARL = [0.522, 1.044, 2.436, 4.350, 6.960];

const $porcentajeIBC = 70
const $porcentajeSalud = 4;
const $porcentajePension = 4;
const $porcentajeFSP = 1;



// Variables para pedir al usuario

let nombreCompleto = "";
let edad = 0;
let tipoDocumento = "";
let numeroDocumento = "";
let comisiones = 0;
let horasExtra = 0;
let salario, mesadaPensional, nivelRiesgo, porcentajeARL, ibc, salud, pension, arl, auxilioTrans;
let totalDevengado, totalDeducido, totalNeto; 

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
  alert("Usuario beneficiario como cotizante. No se calcularán las obligaciones.");
}
else if (edad > 60) {
  mesadaPensional = prompt("Ingrese el valor de su mesada pensional (en COP)");

  ibc = calcularPorcentaje(mesadaPensional, $porcentajeIBC);
  salud = calcularPorcentaje(ibc, $porcentajeSalud);
  fondoSolidaridad = ibc >= $SMMLV * 4 ? calcularPorcentaje(ibc, $porcentajeFSP) : 0;
}
else {

  // Cálculo de obligaciones leborales ----------------------------------------------------------------------------------------------------------------

  salario = prompt("Ingrese su salario (en COP)");
  comisiones = prompt("Ingrese el valor de sus comisiones, si aplica (en COP)"); 
  horasExtra = prompt("Ingrese el valor de sus hotas extra, si aplica (en COP)");
  nivelRiesgo = parseInt(prompt("Seleccione el nivel de ARL:\n\n" + "1. 0.522%\n" + "2. 1.044%\n" + "3. 2.436%\n" + "4. 4.350%\n" + "5. 6.960%\n\n" + 
    "(Ingrese un número del 1 al 5)"));
  
  switch (nivelRiesgo) {
    case 1: porcentajeARL = nivelesARL[0];
      break;
    case 2: porcentajeARL = nivelesARL[1];
      break;
    case 3: porcentajeARL = nivelesARL[2];
      break;
    case 4: porcentajeARL = nivelesARL[3];
      break;
    case 5: porcentajeARL = nivelesARL[4];
      break;
    default:
      alert("Nivel de ARL no válido, por favor ingrese ÚNICAMENTE un número entre 1 y 5.");
  }

  totalDevengado = salario + comisiones + horasExtra;
  auxilioTrans = salario <= $SMMLV * 2 ? $SUBSIDIO_TRANS : 0;

  ibc = calcularPorcentaje(totalDevengado, $porcentajeIBC);
  salud = calcularPorcentaje(ibc, $porcentajeSalud);
  fondoSolidaridad = ibc >= $SMMLV * 4 ? calcularPorcentaje(ibc, $porcentajeFSP) : 0;
  pension = calcularPorcentaje(ibc, $porcentajePension) + fondoSolidaridad;
  arl = calcularPorcentaje(ibc, porcentajeARL);
  
  totalDeducido = salud + pension + arl;
  
  totalNeto = totalDevengado + auxilioTrans - totalDeducido;

  alert(`Simulacro de Obligaciones Laborales para\n${nombreCompleto.toUpperCase()}\n\n` 
  + `Devengado: \t\t $${totalDevengado.toFixed(0)}\n\n`
  + `Deducido: \t\t $${totalDeducido.toFixed(0)}\n\n`
  + `TOTAL: \t\t $${totalNeto.toFixed(0)}\n\n`);
}

