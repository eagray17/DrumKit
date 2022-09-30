
//When associated button is pressed, play audio
//create an array of all drum buttons
var buttons = document.querySelectorAll(".drum");
//For each item (drum) in the array, send an alert if that item is clicked
buttons.forEach(button => {
  button.addEventListener("click", function handleClick() {

    //Create var to hold input for checkCharacter
    var buttonInnerHTML = this.innerHTML;
    //Call the switchboard function checkCharacter to check which sound to play
    checkCharacter(buttonInnerHTML);

    //Call function to add button animation on click
    buttonAnimation(buttonInnerHTML);

  });
});


//When associated keyboard keys are pressed, play audio
document.addEventListener("keydown", function(keyboardEvent) {
  //Call the switchboard function checkCharacter to check which sound to play
  checkCharacter(keyboardEvent.key);

  //Call function to add button animation on click
  buttonAnimation(keyboardEvent.key);

})


//Function that takes a character and checks it against the switch statement in order to play the correct sound
function checkCharacter(character) {

  switch (character) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

//Create a function that adds the .pressed class to the element that matches the character
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
      activeButton.classList.remove("pressed");
  }, 100);
}
