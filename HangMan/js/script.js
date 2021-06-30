//create an Array of words for our secret word
//check to see if guess letter matches with the secret word
    //if yes, change underscore to letter, add correct letter to guessed letters
    //else, lives minus one. guess again
//if lives = 0, comment game is over
    //else  if word is guessed comment you won
// ask if they want to play again.




let letters = document.querySelectorAll('.letters');
let showLives = document.getElementById('lives-left');
let guess;
let lives;
let word;
let answerArray;
let guessedLetter = [];
let secretWord = document.getElementById('secret-word');
let guessedLet = document.getElementById('guessed-letter');
let restart = document.getElementById('button');
let alphabet = document.getElementById('alphabet');
let words = ['inception', 'aliens', 'argo', 'jumanji', 'frozen', 'ratatouille', 'divergent', 'madagascar', 'zootopia', 'zombieland', 'tangled','insidious'];

    function check(event) {
        let character = event.target; 
        guess = character.id;
        console.log('event: ', event.target);
        let position = word.indexOf(guess);
            if (position > -1) {
                for (let j = position; j < word.length; j++) {
                    if(word[j] === guess && answerArray[j] === '_') {
                        answerArray[j] = guess;
                    }
                }
                
                secretWord.innerHTML = answerArray.join(' ');
                guessedLetter.push(guess);
                guessedLet.innerHTML = guessedLetter;
            } else {
                lives--;
                showLives.innerHTML = lives;
                console.log('showlives: ',showLives.innerHTML,'lives: ', lives);
                guessedLetter.push(guess);
                guessedLet.innerHTML = guessedLetter;
            }
                //win condition
            if(answerArray.indexOf('_') === -1) {
                showLives.innerHTML= 'You Won!'
                alphabet.style.display = 'none';
                //lose condition
            } else if (lives  <= 0) {
                showLives.innerHTML = "Game Over!!! the word was, " + word;
                alphabet.style.display = 'none';
            }
            character.disabled = true;

        }
        
        for (let i = 0; i < letters.length; i++) {
            letters[i].addEventListener('click', check) 
}
        
 function getUnderscores(length) {

    return '_'.repeat(length).split('');
    
 }

function playAgain() {
    word = words[Math.floor(Math.random() * words.length)];
    answerArray = getUnderscores(word.length);
    lives = 7;
    guessedLetter = [];
    alphabet.style.display = 'block';
    secretWord.innerHTML = answerArray.join(' ');
    guessedLet.innerHTML = "";
    console.log(word);
    
    
    showLives.innerHTML = lives;
    console.log('lives: ', showLives.innerHTML)
    for (let i = 0; i < letters.length; i++) {
        letters[i].disabled = false;
    }
    
}

playAgain();

restart.addEventListener('click', playAgain);