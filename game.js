let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#m");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"]; // corrected the capitalization
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // corrected variable name
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`; // corrected spacing
        msg.style.backgroundColor = "green";
    } else {
        compScore++; // corrected variable name
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`; // corrected spacing and added "You lose!"
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    msg.innerText = "Draw game. Play again!"; // corrected the message
};

const playGame = (userChoice) => { // corrected function name
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true; // corrected the case
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true; // corrected the case
        } else {
            userWin = compChoice === "Rock" ? false : true; // corrected the case
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); // corrected function name
    });
});
