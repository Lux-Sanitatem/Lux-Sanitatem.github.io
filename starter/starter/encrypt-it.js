/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");
    //Event Listener for Encrypt Button
    var encryptButton = document.getElementById("encryptButton");
    encryptButton.addEventListener("click", encrypt);

    //Event Listener for Reset Button
    var resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", handleReset);
  }


  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function encrypt(){
    console.log("Encrypt Button Clicked!");
    var inputText = document.getElementById("input-text").value;
    var encryptedText = shiftCipher(inputText);
    document.getElementById("result").textContent = encryptedText;
  }

  function handleReset(){
    console.log("Reset Button Clicked!");
    var inputText = document.getElementById("input-text");
    inputText.value= " "; //Clears the Text area. 
  }
  function shiftCipher(text){
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++){
      if(text[i] < 'a' || text[i] > 'z'){
        result += text[i];
      }
      else if (text[i] === 'z') {
        result += 'a';
      }
      else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();
