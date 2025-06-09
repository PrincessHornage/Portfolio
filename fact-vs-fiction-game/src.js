"use strict"; 

//-------------Variables--------------------
let instructions = document.getElementById('instructions'); 
let closeInstructBtn = document.getElementById('close-instructions-btn'); 
let startGameBtn = document.getElementById('start-game-btn'); 
let endGameScreen = document.getElementById('game-over-screen');
let nextBtn = document.getElementById('next-btn');
let trueBtn = document.getElementById('true-btn');
let falseBtn = document.getElementById('false-btn');
let question = document.getElementById('question'); 
let answer = document.getElementById('answer');
let scoreUI = document.getElementById('score'); 
let score = 0; 
let questionIndex = 0; 
let questionData = [
    {question: "Dogs are mammals", isTrue: true},
    {question: "Anime is goated", isTrue: true},
    {question: "Sakura is cool", isTrue: false},
] 
let trueClicked = false; 
let falseClicked = false;

//------------------Functions----------------
//Hides the instructions for the game 

//Sets up game 
window.addEventListener('load', function() {
    trueBtn.style.display ="none"; 
    falseBtn.style.display = "none"; 
    scoreUI.style.display = "none"; 
});

function hideInstructions(){
    instructions.style.display = "none"; 
    closeInstructBtn.style.display = "none";
}
//Game Loop 
function startGame(){
    //Hides Start Game Button 
    startGameBtn.style.display = "none"; 
    closeInstructBtn.style.display = "none";
    instructions.style.display = "none";
    scoreUI.style.display = "flex";  
    question.style.display = "block"; 
    trueBtn.style.display = "block"; 
    falseBtn.style.display = "block"; 

    //Displays question 
    question.innerHTML = questionData[questionIndex].question; 

    //If true is clicked...
    trueBtn.addEventListener('click', () => {

        let ans = questionData[questionIndex].isTrue; 
        if(ans === true){
            score++; 
            scoreUI.innerHTML = "Score: " + score; 
            console.log("Correct!"); 
        }else{
            score--; 
            scoreUI.innerHTML = "Score: " + score;
            console.log("Incorrect. This is false!"); 
        }
        nextQuestion(); 
        console.log(ans); 

    }); 
    //If false is clicked...
    falseBtn.addEventListener('click', () => {
        let ans = questionData[questionIndex].isTrue; 
        if(ans === false){
            score++; 
            scoreUI.innerHTML = "Score: " + score; 
            console.log("Correct!"); 
        }else{
            score--; 
            scoreUI.innerHTML = "Score: " + score;
            console.log("Incorrect. This is true!"); 
        }
        nextQuestion(); 
     
    }); 

}

//Displays next question 
function nextQuestion(){
   questionIndex++; 
   if (questionIndex >= questionData.length) {
        questionIndex = 0;
        gameOver(); 
    }
    question.innerHTML = questionData[questionIndex].question;
}

function gameOver(){
    question.style.display = "none"; 
    trueBtn.style.display = "none"; 
    falseBtn.style.display = "none"; 
    endGameScreen.innerHTML = "Game Over"; 
    if(score > 3){
        endGameScreen.innerHTML += "\nYou Win!"; 
    }else if(score < 3){
        endGameScreen.innerHTML += "\nYou Lose!"; 
    }
    endGameScreen.innerHTML += "\nFinal Score: " + score; 
}

/*function restartGame(){
    startGameBtn.style.display = "block"; 
    closeInstructBtn.style.display = "block"; 
    instructions.style.display = "block"; 
    restartBtn.style.display = "none"; 
    endGameScreen.innerHTML = ""; 
    score = 0; 
    scoreUI.innerHTML = "Score: " + score;
    questionIndex = 0; 
}*/

