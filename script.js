const cpu = parseInt(Math.random() * 10) + 1;
const userinput = document.getElementById("user-input");
const check = document.getElementById("click-me").addEventListener("click", checkFunction);
const checkbutton = document.getElementById("click-me");
const message = document.getElementById("message-box");
const bg = document.getElementById("main-section");
const updatescore = document.getElementById("score");
let score = parseInt(document.getElementById("score").innerText);
score = 10;
const attemptline = document.getElementById("attemptline");
const attempt = document.getElementById("attempt");
const refresh = document.getElementById("refresh");
const playagain = document.getElementById("refresh").addEventListener("click", playAgainFunction);

function checkFunction() {
    user = userinput.value;
    if(user<1 || user>20 || user==null){
        message.innerHTML = "Wrong Input! Try Again!";
    }
    else if (user == cpu) {
        message.innerHTML = "Congratulations! YOU WIN!!";
        bg.style.backgroundColor = "green";
        updatescore.innerHTML = score;
        attemptline.style.display = "none";
        checkbutton.disabled = true;
        refresh.innerHTML = "Play Again";
    }
    else if(user>cpu){
        message.innerHTML = "Oh NO! Too High!";
        bg.style.backgroundColor = "red";
        score--;
        attempt.innerHTML = score;
    }
    else if(user<cpu){
        message.innerHTML = "Oh NO! Too Low!";
        bg.style.backgroundColor = "red";
        score--;
        attempt.innerHTML = score;
    }
    if(score == 0){
        message.innerHTML = "YOU LOSS!! PLAY AGAIN!!";
        checkbutton.disabled = true;
        refresh.innerHTML = "Play Again";
    }
}

function playAgainFunction() {
    window.location.reload();
}