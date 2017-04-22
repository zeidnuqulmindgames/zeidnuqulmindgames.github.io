var colors = ["black", "green", "blue", "yellow", "pink", "gray", "red","orange"]

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
    score = 0;
    attempts = 0;
    time = 60;
    level= 2;
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
    switch (score) {
      case 10:
      level = 4;
      break;
    case 20:
      level = 5;
      break;
    case 30:
      level = 6;
      break;
     case 40:
      level = 7;
      break;
     case 50:
      level = 8;
      break;
       
       
    }
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
