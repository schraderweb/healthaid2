const q1BtnYes = document.querySelector(".q1-btn-yes");
const q1BtnNo = document.querySelector(".q1-btn-no");
const q2BtnYes = document.querySelector(".q2-btn-yes");
const q2BtnNo = document.querySelector(".q2-btn-no");
const loading3 = document.getElementById("loading3");
const loading2 = document.getElementById("loading2");
const loading1 = document.getElementById("loading1");
const qualifyDiv = document.getElementById("qualify");
const dontQualifyDiv = document.getElementById("dontqualify");

const q2Btn = document.querySelector("#q2");
const q1Btn = document.querySelector("#q1");

let choiceUnder = true;
let choiceMedical = true;

var timeLimitInMinutes = 4;
var timeLimitInSeconds = timeLimitInMinutes * 60;
var timerElement = document.getElementById('timer');

function startTimer() {
  timeLimitInSeconds--;
  var minutes = Math.floor(timeLimitInSeconds / 60);
  var seconds = timeLimitInSeconds % 60;

  if (timeLimitInSeconds < 0) {
    timerElement.textContent = '00:00';
    clearInterval(timerInterval);
    return;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  timerElement.textContent = minutes + ':' + seconds;
}

const showText4 = () => {
  if (choiceUnder) {
    var timerInterval = setInterval(startTimer, 1000);
    qualifyDiv.style.display = "block";
  } else {
    dontQualifyDiv.style.display = "block";
  }
};

const showText3 = () => {
  loading3.style.display = "block";
  setTimeout(() => {
    loading3.style.display = "none";
    showText4();
  }, 1000);
};

const showText2 = () => {
  loading2.style.display = "block";
  setTimeout(() => {
    loading2.style.display = "none";
    showText3();
  }, 1000);
};

const showText1 = () => {
  loading1.style.display = "block";
  setTimeout(() => {
    loading1.style.display = "none";
    showText2();
  }, 1000);
};

q1BtnYes.addEventListener("click", () => {
  q1Btn.style.display = "none";
  q2Btn.style.display = "none";
  loading1.classList.add("fade-out");
  choiceUnder = true;
  showText1();
});

q1BtnNo.addEventListener("click", () => {
  q1Btn.style.display = "none";
  q2Btn.style.display = "none";
  q2Btn.classList.add("fade-in");
  loading1.classList.add("fade-out");
  choiceUnder = false;
  showText1();
});

q2BtnYes.addEventListener("click", () => {
  q2Btn.style.display = "none";
  choiceMedical = true;
  showText1();
});

q2BtnNo.addEventListener("click", () => {
  q2Btn.style.display = "none";
  choiceMedical = false;
  showText1();
});
