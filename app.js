document.addEventListener("DOMContentLoaded", function (event) {
  var addOne = 1;

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const secondAnimation = () => {
    var popInSecond = document.getElementById("addSecondAnimation");
    console.log(popInSecond);
    popInSecond.style.display = "flex";
    var timeoutID = window.setTimeout(() => {
      window.clearTimeout(timeoutID);
      popInSecond.style.display = "none";
    }, 1000);
  };

  const countDownTimer = () => {
    var countDown = document.querySelector("#countdown");
    countDown.innerHTML = 10;
    var downloadTimer = setInterval(function () {
      if (countDown.innerHTML <= 1) {
        clearInterval(downloadTimer);
        endgame();
      }
      countDown.value = 10 - countDown.innerHTML;
      countDown.innerHTML -= 1;
    }, 1000);
  };

  const endgame = () => {
    let buttonReveal = document.getElementById("buttonContainer");
    document.getElementById("userGameInput").disabled = true;
    var newPlaceHolder = document.getElementById("userGameInput");
    newPlaceHolder.placeholder = "";
    buttonReveal.style.display = "flex";
    var resetCurrentScore = document.getElementById("currentScore");
    var checkHighScore = document.getElementById("highScore");
    if (resetCurrentScore.innerHTML > checkHighScore.innerHTML) {
      checkHighScore.innerHTML = resetCurrentScore.innerHTML;
    }
  };

  const resetGame = () => {
    if ((document.getElementById("userGameInput").disabled = true)) {
      addOne = 1;
      var equation = document.getElementById("equations");
      var resetCurrentScore = document.getElementById("currentScore");
      var checkHighScore = document.getElementById("highScore");
      if (resetCurrentScore.innerHTML > checkHighScore.innerHTML) {
        checkHighScore.innerHTML = resetCurrentScore.innerHTML;
      }
      resetCurrentScore.innerHTML = 0;
      equation.innerHTML = "";
      getNewEquation(getRandomInt(1, 10), getRandomInt(1, 10));
      document.getElementById("userGameInput").disabled = false;
      var newPlaceHolder = document.getElementById("userGameInput");
      newPlaceHolder.placeholder = "Ready";
      countDownTimer();
    }
  };

  const getNewEquation = (num1, num2) => {
    var newEqHTML = document.querySelector("#equations");
    newEqHTML.innerHTML += num1 + "+" + num2;
  };

  //grab current equation and check if user answer is correct
  const grabCurrentEquation = () => {
    const userAnswer = document.querySelector("#userGameInput").value;
    var currentEquation = document.getElementById("equations");
    equationAnswer = eval(currentEquation.innerHTML);
    if (equationAnswer == userAnswer) {
      secondAnimation();
      // switch equation and add +1 second
      var countDown = document.querySelector("#countdown");
      countDown.innerHTML++;
      currentEquation.innerHTML = "";
      getNewEquation(getRandomInt(1, 10), getRandomInt(1, 10));
      // Score Upkeep
      playerScore(addOne);
      addOne++;
    }
  };
  const playerScore = (num) => {
    var playersCurrentScore = document.getElementById("currentScore");
    playersCurrentScore.innerHTML = num;
  };
  document.querySelector("#startButton").addEventListener("click", () => {
    let startButton = document.querySelector("#startButton");
    startButton.style.display = "none";
    document.getElementById("userGameInput").disabled = false;
    countDownTimer();
  });
  document.querySelector("#resButton").addEventListener("click", resetGame);
  document
    .querySelector("#userGameInput")
    .addEventListener("keyup", grabCurrentEquation);
  // initalize page
  getNewEquation(getRandomInt(1, 10), getRandomInt(1, 10));
  document.getElementById("userGameInput").disabled = true;
});
