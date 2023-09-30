import analyzer from './analyzer.js';


const textArea=document.querySelector('textarea[name="user-input"]');
const clearbutton=document.getElementById("reset-button");
clearbutton.addEventListener("click", () => {    
  textArea.value=''
  document.querySelector('[data-testid="word-count"]').innerHTML='palabras: ' + 0;
  document.querySelector('[data-testid="character-count"]').innerHTML='caracteres: ' + 0;
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML='caracteres sin espacios: ' +0;
  document.querySelector('[data-testid="number-count"]').innerHTML='números: ' + 0;
  document.querySelector('[data-testid="number-sum"]').innerHTML='suma de números: ' + 0;
  document.querySelector('[data-testid="word-length-average"]').innerHTML='promedio por palabra: ' + 0;

});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const text=document.querySelector('textarea[name="user-input"]');
textArea.addEventListener('input', function(){
  
  document.querySelector('[data-testid="word-count"]').innerHTML='palabras: ' + analyzer.getWordCount(text.value);
  document.querySelector('[data-testid="character-count"]').innerHTML='caracteres: ' + analyzer.getCharacterCount(text.value);
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML='caracteres sin espacios: ' + analyzer.getCharacterCountExcludingSpaces(text.value);
  document.querySelector('[data-testid="number-count"]').innerHTML='números: ' + analyzer.getNumberCount(text.value);
  document.querySelector('[data-testid="number-sum"]').innerHTML='suma de números: ' + analyzer.getNumberSum(text.value);
  document.querySelector('[data-testid="word-length-average"]').innerHTML='promedio por palabra: ' + analyzer.getAverageWordLength(text.value);

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