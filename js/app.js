let numero1 = prompt("Ingrese un numero:");
let numero2 = prompt("Ingrese otro numero:");

let operacion = prompt(
  "¿Que operación desea realizar?: \nSuma \nResta \nMultiplicación \nDivisión"
);

if (operacion.toLowerCase == "suma") {
  alert(parseInt(numero1) + parseInt(numero2));
} else if (operacion.toLowerCase == "resta") {
  alert(parseInt(numero1) - parseInt(numero2));
} else if (operacion.toLowerCase == "multiplicacion") {
  alert(parseInt(numero1) * parseInt(numero2));
}
