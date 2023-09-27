const analyzer = {  
  getWordCount: (text) => {
  /*const wordsStr=text.value;
  const words=wordsStr.split(" ");
  return words.length;*/

    const strText = text.value; /*si no utilizo el .value, el programa llama al texto como un objeto y no como un str*/
    const words=strText.split(' ');
    const wordsList=[];
    let counter=0;
    for (let word of words){
      if (word !== ' ') {
      wordsList.push(word);
      counter=counter+1;
      }
    }
  return counter-1; /*necesito optimizar este código ya que cuenta el espacio como una palabra, por eso el -1*/
  },
  getCharacterCount: (text) => {
    const wordsStr=text.value;
    return wordsStr.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const characterList=['!'," ",'|','¬','"','#','$','%','&','/','(',')','=','?',
    '¡','¿','*','+','-','~','´','{','}','[',']','`','^','_','.',';',',','@','>','<'];
    let onlyLetters=[];
    //let counterLetters=0;
    const strText = text.value; /*si no utilizo el .value, el programa llama al texto como un objeto y no como un str*/
    const letters=strText.split('');
    for(const letter of letters){
      if (!characterList.includes(letter) && letter !== ' '){
        onlyLetters.push(letter);
        //counterLetters=counterLetters+1;
      }
    }
  //return counterLetters-1;
    return onlyLetters.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {   2 
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const strText = text.value;  
    const fullText=strText.split('');
    const numberList=['1','2','3','4','5','6','7','8','9','0'];
    let counterNumbers=0;

    for(let char of fullText){
      if(numberList.includes(char)){
        counterNumbers=counterNumbers+1;

      }
    }
    return counterNumbers;
    
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
