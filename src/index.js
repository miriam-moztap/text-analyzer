import analyzer from './analyzer.js';


const textArea=document.querySelector('textarea[name="user-input"]');
const clearbutton=document.getElementById("reset-button");
clearbutton.addEventListener("click", () => {    
  textArea.value=''
  document.querySelector('[data-testid="word-count"]').innerHTML='Palabras: ' + 0;
  document.querySelector('[data-testid="character-count"]').innerHTML='Caracteres: ' + 0;
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML='Caracteres sin espacios: ' +0;
  document.querySelector('[data-testid="number-count"]').innerHTML='Números: ' + 0;
  document.querySelector('[data-testid="number-sum"]').innerHTML='Suma de números: ' + 0;
  document.querySelector('[data-testid="word-length-average"]').innerHTML='Promedio por palabra: ' + 0;

});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const text=document.querySelector('textarea[name="user-input"]');
textArea.addEventListener('input', function(){
  
  document.querySelector('[data-testid="word-count"]').innerHTML='Palabras: ' + analyzer.getWordCount(text.value);
  document.querySelector('[data-testid="character-count"]').innerHTML='Caracteres: ' + analyzer.getCharacterCount(text.value);
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML='Caracteres sin espacios: ' + analyzer.getCharacterCountExcludingSpaces(text.value);
  document.querySelector('[data-testid="number-count"]').innerHTML='Números: ' + analyzer.getNumberCount(text.value);
  document.querySelector('[data-testid="number-sum"]').innerHTML='Suma de números: ' + analyzer.getNumberSum(text.value);
  document.querySelector('[data-testid="word-length-average"]').innerHTML='Promedio por palabra: ' + analyzer.getAverageWordLength(text.value);

});

/*function createBurst(){
  let animContainer=document.querySelector(".animation-container");
  let burst=document.querySelector(".burst");

  burst.style.top=Math.random() * innerHeight + "px";
  burst.style.top=Math.random() * innerWidth + "px";

  let burstClone=burst.cloneNode(true);
  animContainer.appendChild(burstClone);

}
setInterval(createBurst, 1);*/
