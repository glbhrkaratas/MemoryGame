const cards = document.querySelectorAll(".card");

console.log(time.innerHTML);
var isFlipped = false;
var firstCard;
var secondCard;

let countdownFinished = false; // Track if countdown has finished

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random()* 16);
      card.style.order = index;
  });
}
)();




document.getElementById("time").innerHTML ="Are you ready!!!";
cards.forEach((card) => card.classList.add("flip")); 
setTimeout(() => {
  cards.forEach((card) => card.classList.remove("flip"));
   startCountdown(); 
}, 5000);

window.onload = function () {
  let seconds = 60;
  const countdownDisplay = document.getElementById("time");


  const countdown = setInterval(function () {
    seconds--;
    countdownDisplay.textContent = seconds;

  if(seconds<5){
    document.body.style.backgroundColor="red";
  }

    if (seconds <= 0) {
      clearInterval(countdown);
      countdownDisplay.textContent = "Countdown Complete!";
      document.body.style.backgroundColor="#293462";
      function disableCardClicks() {
        cards.forEach((card) => card.removeEventListener("click", flip));
      }
      countdownFinished = true;
      disableCardClicks();

      checkGameCompletion();
  
    }
  }, 1000);

  cards.forEach((card) => card.addEventListener("click", flip))
  function flip() {
    this.classList.add("flip");
    if (!isFlipped) {
       isFlipped = true;
       firstCard = this;
    } else {
      secondCard = this;
      console.log(firstCard);
      console.log(secondCard);
      checkIt();
    }
  }
   
  function checkIt() {
  if (firstCard.dataset.image === secondCard.dataset.image){
    checkGameCompletion();
    success()
  }else(
    fail()
  )
  };
  
  var success = () => {
   
     firstCard.removeEventListener('click',File);
    secondCard.removeEventListener('click',File);
     reset()
  
  }
   var fail =() => {
  setTimeout( () => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
     reset()
  }, 500)
  }
  var reset = () => {
     isFlipped = false;
     firstCard = null;
     secondCard = null;
  
  }

  function checkGameCompletion() {
    const allCardsFlipped = Array.from(cards).every((card) => card.classList.contains('flip'));
    if (allCardsFlipped && !countdownFinished) {
      clearInterval(countdown);
      countdownFinished = true;
    }
  }
  

  function congratulateUser() {
       alert("Congratulations! You've completed the game before the countdown ended! Click button the refresh");
  }
  
  
};


function refreshPage(){
  window.location.reload();
} 

