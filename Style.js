let userScore = 0;
let compScore= 0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genComputerChoice=()=>{
    let options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw.";
    msg.style.backgroundColor = "black";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Won!");
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lost");
        msg.innerText = `You Lost :( ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame=(userChoice)=>{
    // console.log("User choice =",userChoice);
    // Generate computer choice
    const compChoice=genComputerChoice();
    console.log("Computer Choice=",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;

        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
        // console.log("choice was clicked",userChoice);
    });
});