var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = []; // At the top of the game.js file, create a new empty array with the name userClickedPattern.

var started = false; //You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

var level = 0; // Create a new variable called level and start at level 0.

// Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {

  if (!started) {
    // The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() { // Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

  var userChosenColour = $(this).attr("id"); // Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  console.log(this);
  userClickedPattern.push(userChosenColour); // Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  console.log(userClickedPattern);
  playSound(userChosenColour); //  In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1); // Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.


});


function checkAnswer(currentLevel) { // Create a new function called checkAnswer(), it should take one input with the name currentLevel

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) { // Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".

    console.log("success");

    if (userClickedPattern.length === gamePattern.length) { // If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.

      setTimeout(function() { // Call nextSequence() after a 1000 millisecond delay.
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");

    playSound("wrong");                                 // In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.

    $("body").addClass("game-over");         // In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

  $("#level-title").text("Game Over, Press Any Key to Restart");              // Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.

      starOver();                                          // Call startOver() if the user gets the sequence wrong.
  }
}


function nextSequence() {

  userClickedPattern = [];                                  // Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.

  level++;                                               // Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  $("#level-title").text("Level " + level);                     // Inside nextSequence(), update the h1 with this change in the value of level.


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // Use jQuery to select the button with the same id as the randomChosenColour
  playSound(randomChosenColour);

}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  // add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");
     setTimeout(function() {                              // remove the pressed class after a 100 milliseconds.
     $("#" + currentColor).removeClass("pressed");
  }, 100);

}

function starOver() {       //  Create a new function called startOver().
  level = 0;                  //reset the values of level, gamePattern and started variables.
  gamePattern = [];
  started = false;
}
