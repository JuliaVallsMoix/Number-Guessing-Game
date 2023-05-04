// Good luck!

let estoyJugando = true;
let numeroCorrecto = Math.floor(Math.random() * 100);
let numIntentos = 10;


// Actualizar el innerHTML del nodo adecuado con el número de intentos iniciales



document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Impedimos que el formulario haga un petición GET
  
  let inputValue = +document.querySelector('#guessField').value;
  let advice = document.querySelector('.lowOrHi');

  if (inputValue > numeroCorrecto) {
    advice.innerHTML = 'Too high! Try again!'
  } else if (inputValue < numeroCorrecto) {
    advice.innerHTML = 'Too low! Try again!'
  } else if (inputValue === numeroCorrecto) {
    advice.innerHTML = '<p>You guessed correctly!</p> <p>Start New Game</p>'
  }

  

  console.log('input value: ', inputValue);
  

  // Comprobar si el número que ha puesto el usuario es mayor o menor que el numeroCorrecto. Tomar decisiones
  
});

