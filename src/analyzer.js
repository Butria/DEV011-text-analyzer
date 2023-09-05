const analyzer = {  
  getWordCount: (text) => {
    const palabras = text.trim().split(/\s+/);
    return palabras.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    // Elimina espacios y signos de puntuación utilizando una expresión regular global
    const caracteresSinEspaciosNiPuntuacion = text.replace(/[ .,/#$%^&*;:{}=_`~()]/g, '');
  
    // Devuelve la longitud de la cadena sin espacios ni signos de puntuación
    return caracteresSinEspaciosNiPuntuacion.length;
  },
  
  getAverageWordLength: (text) => {
    // Dividir el texto en palabras eliminando espacios en blanco
    const palabras = text.trim().split(/\s+/);
  
    if (palabras.length === 0) {
      return 0;
    }
  
    // Sumar las longitudes de todas las palabras
    const sumaLongitudes = palabras.reduce((total, palabra) => total + palabra.length, 0);
  
    // Calcular la longitud promedio con 2 decimales
    const longitudPromedio = sumaLongitudes / palabras.length;
    return Number(longitudPromedio.toFixed(2));
  },
  getNumberCount: (text) => {
    // Utiliza una expresión regular para buscar números enteros o decimales
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
  
    return numeros ? numeros.length : 0;
  
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    // Utiliza una expresión regular para buscar números enteros o decimales
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
  
    if (!numeros) {
      return 0;
    }
  
    let sumaNumeros = 0;
  
    for (const numero of numeros) {
      // Verifica si el número es válido antes de sumarlo
      const numeroParseado = parseFloat(numero);
      if (!isNaN(numeroParseado)) {
        sumaNumeros += numeroParseado;
      }
    }
  
    return sumaNumeros;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
