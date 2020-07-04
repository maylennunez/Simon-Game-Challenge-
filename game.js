var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = []; // At the top of the game.js file, create a new empty array with the name userClickedPattern.

var started = false;   //You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

var level = 0;        // Create a new variable called level and start at level 0.

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
    animatePress(userChosenColour);
  playSound(userChosenColour); //  In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
});

function nextSequence() {
  // Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;
  // Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

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

function animatePress(currentColor){
  // Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  // use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}
