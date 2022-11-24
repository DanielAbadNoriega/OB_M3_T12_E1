function fibonacci(num) {
  if (num <= 1) {
    return [1];
  }
  if (num <= 2) {
    return [1, 1];
  }
  if (num >= 2) {
    let fib = [1, 1];
    let i = 1;
    for (i; i <= num - 2; i++) {
      res = fib[i] + fib[i - 1];
      fib.push(res);
    }
    return fib;
  }

  throw new Error("\nIntroduce un número");
}

try {
  console.log(fibonacci(6));
} catch (error) {
  console.log(`[Error] Error en la ejecución del código: ${error.message}`);
}
