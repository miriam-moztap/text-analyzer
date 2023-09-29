const analyzer = {  
  getWordCount: (text) => {
  /*const wordsStr=text.value;
  const words=wordsStr.split(" ");
  return words.length;*/ 

    
    const strText = text.trim().split(" ");
    
    if (text==="" || text===" "){
      return 0;
    }
    let counter=0;
    for (let i=0; i<strText.length; i++){ 
      if(strText.length>0) {
        counter++;
      }
    }
    return Number(counter); 
  },
  getCharacterCount: (text) => {
    if (text===" "){
      return 0;
    }
    const wordsStr=text;
    return wordsStr.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    if (text==="" || text===" "){
      return 0;
    }
    const characterList=['!'," ",'|','¬','"','#','$','%','&','/','(',')','=','?',
      '¡','¿','*','+','-','~','´','{','}','[',']','`','^','_','.',';',',','@','>','<'];
    const onlyLetters=[]; 
    const letters=text.split('');
    for(const letter of letters){
      if (!characterList.includes(letter) && letter !== ' '){
        onlyLetters.push(letter);
      }
    }
    return onlyLetters.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {   
    
    
    if (text==="" || text===" "){
      return 0;
    }
    // Dividir el texto en palabras, teniendo en cuenta signos de puntuación
    /*const palabras = text.split(" ");

    if (!palabras) {
      return 0; // En caso de que no haya palabras válidas en el texto
    }

    // Calcular la suma de las longitudes de todas las palabras
    const sumaLongitudes = palabras.reduce((acumulador, palabra) => {
      return acumulador + palabra.length;
    }, 0);

    // Calcular el largo promedio
    const largoPromedio = sumaLongitudes / palabras.length;

    return largoPromedio.toFixed(2);*/

    const wordsA=text.split(/\s+/g);
    let charsPerWord=0;
    for(let i=0; i<wordsA.length; i++){
      const word= wordsA[i];
      charsPerWord=charsPerWord+word.length;
    }
    const average=((charsPerWord)/(wordsA.length)).toFixed(2);
    return (parseFloat(average)); //recuerda que siempre se retorna un string, por eso el parseFloat va en el retorno final

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    if (text===" "){
      return 0;
    }
    const Texto= text.match(/[-+]?\b\d+(\.\d+)?\b/g); // Encuentra todos los números en el texto que no estén unidos a letras, decimales y positivos y negativos
    const numsList=[]; 
    if (Texto) {
      numsList.push(...Texto.map(Number)); // agregar los valores encontrados al array
    }
    let counter=0;
    for (const dato of numsList){
      if(numsList.includes(dato)){
        counter=counter+1;
      }
      
    }
    return(counter);
  
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    if (text===" "){
      return 0;
    }
    const Texto= text.match(/[-+]?\b\d+(\.\d+)?\b/g); // Encuentra todos los números en el texto que no estén unidos a letras
    const numsList=[];
    
    if (Texto) {
      numsList.push(...Texto.map(Number)); // agregarlos valores encontrados al array
    }
    let counter=0;
    for (const dato of numsList){
      
      counter=counter+dato;
    }
    return(counter);
  }

};

export default analyzer;
