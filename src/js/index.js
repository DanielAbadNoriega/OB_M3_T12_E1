// n = n-1 + n -2
// n=1  n= 0 - 2
// n= 2 n= 1:  + 2 -1
// n =3 n = 3-1 + 3-2 -> 2 + 1
// n = 4 -- n = 4-1 + 3 - 2 -> 3 + 2
//Resultado [1, 1, 2, 3, 5, 8]

function fibonacci(num) {
  if (num >= 2) {
    let fib = [1, 1];
    let i = 2;
    for (i; i <= num; i++) {
      res = i - 1 + (i - 2);
      fib.push();
    }
  }

  throw new Error("\nIntroduce un número mayor 2");
}

try {
} catch (error) {
  console.log(`[Error] Error en la ejecución del código: ${error.message}`);
}
