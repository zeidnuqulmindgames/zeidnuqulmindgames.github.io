
var colors = ["cyan", "green", "blue", "yellow", "pink"]

var lastCard;
var currentCard;

var score = 0;
var attempts = 0;
var time = 60;
var tick; // this is to set the timer(). Very IMPORTANT!
var level


function start() {
    startB.classList.add("hide");
    matchB.classList.remove("hide");
    notB.classList.remove("hide");
     score = 0;
    attempts = 0;
    time = 60;
    level= 2;
    choose();
  timer();
  tick= setInterval(timer,1000);
   window.addEventListener('keydown', arrows);
}




function arrows(key) {
  
  var keycode = key.keyCode;
  if (keycode == 37) {
    match (false);
  } else if (keycode == 39) {
    match (true)
  }
}

function choose() {

  lastCard = currentCard;

    currentCard = colors[Math.floor(Math.random() * 5)];
    colorName = colors[Math.floor(Math.random() * 5)];
    colorStyle = colors[Math.floor(Math.random() * 5)];

    if (Math.random() < 0.4) {
        currentCard = lastCard;
    } else {
        currentCard = colors[Math.floor(Math.random() * 5)];
    }
   
    color.style.background = currentCard;
}

function match(guess) {
    if (guess == (lastCard == currentCard)) {
        // alert("correct")
        score++;
    } else {
        //  alert("incorrect")
    }

    attempts++;
    Scoretext.innerHTML = score;
    accText.innerHTML = (score * 100 / attempts).toFixed(1);
     color.style.background = "black";
     setTimeout(choose, 50);
    
}


function timer() {
    timeText.innerHTML = time;
  if (time == 0) {
    clearInterval(tick);
   startB.classList.remove("hide");
    matchB.classList.add("hide");
    notB.classList.add("hide");
    window.removeEventListener('keydown', arrows);
  } else {
    time--;
  }
}
