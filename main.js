// crear un algorirmo con un condicinal

let sol= prompt("Sol?");
let plaza= prompt("Vas a la plaza?");

if (sol == "si" &&  plaza == "si") {
    alert ("Anda a tomar sol y jugar en la plaza");
}
else if ( sol == "no" && plaza == "si") {
    alert ("hay mucho sol llevate gorra y anda la plaza");
} 
else if ( sol == "no" && plaza == "no" ) {
    alert ("quedate en casa miradno la tele");
}
else {
    alert ("responde si o no");
}

// crear un algoritmo utilizando un ciclo

let entrada = prompt("Ingrese un nombre");

while(entrada != "JAVI" ) {
    switch (entrada) {
        case "MARA":
          alert ("HOLA MARA");
          break;
        case "LUIS":
          alert ( "HOLA LUIS");
          break
        case "VALERIA":
           alert ("HOLA VAERIA");
           break;
        default:
            alert ("QUIEN ERES?")
            break;
    }
    
   entrada = prompt ("Ingrese un nombre");
}
    
// Un simulador de calculadora usando el bucle while

let continuar = true;

while (continuar) {
  // Pide al usuario que ingrese un operador y dos números
  const operador = prompt("Ingresa un operador (+, -, *, /):");
  const num1 = parseFloat(prompt("Ingresa el primer número:"));
  const num2 = parseFloat(prompt("Ingresa el segundo número:"));

  let resultado;

  // Realiza el cálculo correspondiente según el operador ingresado
  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      alert("Operador no válido");
      continue;
  }

  alert(`El resultado es ${resultado}`);
  continuar = confirm("¿Desea continuar calculando?");
}

alert("¡Gracias por usar la calculadora!");
