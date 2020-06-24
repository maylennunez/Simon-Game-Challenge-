function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var buttonColours = ["red", "blue", "green", "yellow"];
  var gamePattern = [];
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

}
