var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = []; // At the top of the game.js file, create a new empty array with the name userClickedPattern.


$(".btn").click(function() { // Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

  var userChosenColour = $(this).attr("id"); // Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  console.log(this);
  userClickedPattern.push(userChosenColour); // Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  console.log(userClickedPattern);

  playSound(userChosenColour); //  In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
});



function nextSequence() {

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
