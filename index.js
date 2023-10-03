import analyzer from './analyzer.js';

//Selectores del DOM

const texto = document.querySelector('textarea[name="user-input"]');
const resetButton = document.getElementById('reset-button');
const wordCount = document.querySelector("li[data-testid='word-count']");
const characterCount = document.querySelector("li[data-testid='character-count']");
const characterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']");
const wordlengthaverage = document.querySelector("li[data-testid='word-length-average']");
const numberCount = document.querySelector("li[data-testid='number-count']");
const numberSum = document.querySelector("li[data-testid='number-sum']");

//Eventos del DOM



//Contador de palabras
texto.addEventListener("keyup", function(){
  const palabras = analyzer.getWordCount(texto.value);
  wordCount.innerHTML= 'Palabras: ' + palabras; 
  //Contador de caracteres
  const caracteres = analyzer.getCharacterCount(texto.value);
  characterCount.innerHTML = 'Caracteres: ' + caracteres;
  // Contador de caracteres sin espacios
  if (texto.value.trim() === '') {
    characterNoSpacesCount.innerHTML = 'Caracteres sin espacio: ';
  } else {
    const caracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(texto.value);
    characterNoSpacesCount.innerHTML = 'Caracteres sin espacio: ' + caracteresSinEspacios;
  }

  // Contador de longitud media
  const averageLength = analyzer.getAverageWordLength(texto.value);
  wordlengthaverage.innerHTML = 'Longitud promedio de palabra: ' + averageLength.toFixed(2);

  //Contador de números
  const numeroConteo = analyzer.getNumberCount(texto.value);
  numberCount.innerHTML = 'Números: ' + numeroConteo;

  //Suma de números enteros
  // const sumaNumeros = analyzer.getNumberSum(texto.value);
  //numberSum.innerHTML = 'Suma de números: ' + sumaNumeros;

  //Suma números decimales
  let sumaNumerosDecimales = 0;
  const numerosDecimales = texto.value.match(/\d+(\.\d+)?/g);
  if (numerosDecimales) {
    for (let i = 0; i < numerosDecimales.length; i++) {
      sumaNumerosDecimales += parseFloat(numerosDecimales[i]);
    }
  }
  numberSum.innerHTML = 'Suma de números decimales: ' + sumaNumerosDecimales.toFixed(2);
 
});




resetButton.addEventListener('click', () => {
  texto.value = '';
  wordCount.innerHTML = 'Palabras: ';
  characterCount.innerHTML= 'Caracteres: '; 
  characterNoSpacesCount.innerHTML = 'Caracteres sin espacio: ';
  numberCount.innerHTML = 'Números: ';
  numberSum.innerHTML = 'Suma de números: ';
  wordlengthaverage.innerHTML = 'Longitud promedio de palabra: ';

});






//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`



//Llamar las variables que se necesitan para los métodos