const lector = require("readline");

// Configuramos la interfaz de entrada/salida
const lr = lector.createInterface({
  entrada: process.stdin,
  salida: process.stdout
});

function solicitarNumero() {
  return new Promise((resolve) => {
    lr.question("Ingresa un número para calcular su factorial: ", (valor) => {
      if (isNaN(valor) || valor.trim() === "") {
        console.error("❌ Error: Debes ingresar un número válido.");
        resolve(null); // devolvemos null para repetir
      } else {
        resolve(Number(valor));
      }
    });
  });
}

function calcularFactorial(n) {
  if (n < 0) {
    console.error("❌ El factorial no está definido para números negativos.");
    return null;
  }
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

async function main() {
  let numero = null;
  // Repetimos hasta que el usuario ingrese un número válido
  while (numero === null) {
    numero = await solicitarNumero();
  }

  const factorial = calcularFactorial(numero);
  if (factorial !== null) {
    console.log(`✅ El factorial de ${numero} es: ${factorial}`);
  }

  lr.close();
}

main();