$(document).ready(function () {
  let count = 0;

  $("#increment").click(function () {
    count++;
    // Update counter text
    $("#counter").text(count);
    // Add pop animation
    $("#counter").addClass("plus-pop");

    // Remove pop animation after it finishes
    setTimeout(function () {
      $("#counter").removeClass("plus-pop");
    }, 200);
    // Play sound effect
    plusSound.play();
  });

  $("#decrement").click(function () {
    count--;
    // Update counter text
    $("#counter").text(count);
    // Add pop animation
    $("#counter").addClass("minus-pop");

    // Remove pop animation after it finishes
    setTimeout(function () {
      $("#counter").removeClass("minus-pop");
    }, 200);
    // Play sound effect
    minusSound.play();
  });

  $("#reset").click(function () {
    count = 0;
    // Update counter text
    $("#counter").text(count);
    // Add pop animation
    $("#counter").addClass("reset-pop");
    // Remove pop animation after it finishes
    setTimeout(function () {
      $("#counter").removeClass("reset-pop");
    }, 200);
    // Play sound effect
    resetSound.play();
  });

  //sound effects
  let plusSound = new Audio("/sounds/plus.mp3");
  let minusSound = new Audio("/sounds/minus.mp3");
  let resetSound = new Audio("/sounds/reset.mp3");
});
