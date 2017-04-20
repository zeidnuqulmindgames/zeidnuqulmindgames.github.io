var colors = ["black", "green", "blue", "yellow", "pink"]

var wordName;
var colorName;
var colorStyle;

var score = 0;
var attempts = 0;
var time = 60;
var tick;

function start() {
    startB.classList.add("hide");
    matchB.classList.remove("hide");
    notB.classList.remove("hide");
    choose();
  timer();
  setInterval(timer,1000);
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

    wordName = colors[Math.floor(Math.random() * 5)];
    colorName = colors[Math.floor(Math.random() * 5)];
    colorStyle = colors[Math.floor(Math.random() * 5)];

    if (Math.random() < 0.4) {
        colorStyle = wordName;
    } else {
        colorStyle = colors[Math.floor(Math.random() * 5)];
    }
    word.innerHTML = wordName;
    color.innerHTML = colorName;
    color.style.color = colorStyle;
}

function match(guess) {
    if (guess == (wordName == colorStyle)) {
        // alert("correct")
        score++;
    } else {
        //  alert("incorrect")
    }

    attempts++;
    Scoretext.innerHTML = score;
    accText.innerHTML = (score * 100 / attempts).toFixed(1);
    choose();
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
