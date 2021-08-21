//receber do usuario um numero e responder se eh par ou impar.
let n = +prompt('Digite um número');

if (n % 2 === 0) {
  console.log('O número é par.');
  } else if(n % 2 === 1) { 
    console.log('O número é impar.');
  } else {
    console.log('Digite um numero válido.');
  };
