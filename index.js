var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
let i= document.querySelectorAll('i');
// let r = document.querySelector('.r');

var userScore=0;
var computerScore = 0;
var result = document.querySelector('#result-comments');
var user_score = document.getElementById('user');
console.log(user_score);
var computer_score= document.getElementById('computer');
function determineWinner(userChoice,computerChoice) {
    // computerChoice = getComputerInput();
console.log(`user:${userChoice.id}`);
console.log(`computer:${computerChoice}`);
    if(userChoice.id === computerChoice) {
        result.textContent = 'Its a draw';
        return;
    } 
    else
     if(userChoice === rock) {
        if(computerChoice==='paper') { result.textContent = 'computer wins'; computerScore++;  computer_score.textContent = `computer:${computerScore}`; }
        else 
       { result.textContent = 'user wins'; userScore++;  user_score.textContent = `user:${userScore}`;}
    }
 else
    if(userChoice=== paper) {
        if(computerChoice ==='rock')  {result.textContent = 'user wins'; userScore++; user_score.textContent = `user:${userScore}`;}
        else
         {result.textContent = 'computer wins'; computerScore++; computer_score.textContent = `computer:${computerScore}`;}
    }
  else
    if(userChoice ===scissors) {
        if(computerChoice ==='rock') { result.textContent = 'computer wins'; computerScore++; computer_score.textContent = `computer:${computerScore}`;}
        else 
       { result.textContent = 'user wins'; userScore++; user_score.textContent = `user:${userScore}`;}
    }
}
rock.addEventListener('click',function() {
     let inputOfUser = getUserInput(rock);
     console.log(inputOfUser.id);
   let computerUser = getComputerInput();
   console.log(computerUser);
    determineWinner(inputOfUser,computerUser);
});
paper.addEventListener('click',function() {
    // console.log('you have selected paper!!')
    let inputOfUser = getUserInput(paper);
    console.log(inputOfUser.id);
  let computerUser = getComputerInput();
  console.log(computerUser);
   determineWinner(inputOfUser,computerUser);
});
scissors.addEventListener('click',function() {
    // console.log('you have selected scissors!!')
    let inputOfUser = getUserInput(scissors);
    console.log(inputOfUser.id);
  let computerUser = getComputerInput();
  console.log(computerUser);
   determineWinner(inputOfUser,computerUser);
});
function getComputerInput() {
    var random = Math.random();
let res= '';
if(random<0.3) {res= 'rock';}
if(random>0.3 && random<0.6) {res='paper';}
if(random>0.6) {res='scissors';}
return res;
}
function getUserInput(userInput) {
if(userInput === rock || userInput === paper||userInput===scissors)  return userInput;
}




