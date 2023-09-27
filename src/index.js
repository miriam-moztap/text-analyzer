import analyzer from './analyzer.js';


    const textArea=document.querySelector('textarea[name="user_input"]');
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


    textArea.addEventListener('keyup', function(){
    const text=document.querySelector('textarea[name="user_input"]');
    document.querySelector('[data-testid="word-count"]').innerHTML='palabras: ' + analyzer.getWordCount(text);
    document.querySelector('[data-testid="character-count"]').innerHTML='caracteres: ' + analyzer.getCharacterCount(text);
    document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML='caracteres sin espacios: ' + analyzer.getCharacterCountExcludingSpaces(text);
    document.querySelector('[data-testid="number-count"]').innerHTML='pero ahí vamos!';
    document.querySelector('[data-testid="number-sum"]').innerHTML='números: ' + analyzer.getNumberCount(text);
    document.querySelector('[data-testid="word-length-average"]').innerHTML='A por ellooooo';

    });

