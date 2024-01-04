// Uses the database to set three different lists, one of every dog name, one of every state name, and one of every cat name
var dogNameList = (getColumn("Dogs", "Name"));
var statesList = (getColumn("US States", "State Name"));
var catNameList = (getColumn("Cats", "Name"));



// Sets a list named "filteredList", it is empty

var filteredList = [];


// onEvent where when the "button" is clicked, 
onEvent("button", "click", function( ) {
  // variables "category", "textInput", and "wordLength" are determined by the user's input
  // filteredList is reset to empty
  var category = getText("variableDropdown");
  var textInput = getText("textInput");
  var wordLength = textInput.length;
  filteredList = [];
  // When the user picks the "Dogs" option from the dropdown box, the code in this if-statement runs
  // if the "textInput" equals the first couple of letters of the "Dog" name, then the item is added to the filteredList
  if (textInput == "") {
    //Nothing happens, skips the "else " code 
  } else {
    if (category == "Dogs") {
      for (var i = 0; i < dogNameList.length; i++) {
        var firstLetter = dogNameList[i].substring(0, wordLength);
        if (textInput == firstLetter) {
          appendItem(filteredList, dogNameList[i]);
        }
      }
      // When the user picks the "Cats" option from the dropdown box, the code in this if-statement runs
      // if the "textInput" equals the first couple of letters of the "Cat" name, then the item is added to the filteredList
    } else if (category == "Cats") {
      for (var o = 0; o < catNameList.length; o++) {
        var firstLetter2 = catNameList[o].substring(0, wordLength);
        if (textInput == firstLetter2) {
          appendItem(filteredList, catNameList[o]);
        }
      }
      // When the user picks the "U.S. States" option from the dropdown box, the code in this if-statement runs
      // if the "textInput" equals the first couple of letters of the "State" name, then the item is added to the filteredList
    } else if (category == "U.S. States") {
      for (var p = 0; p < statesList.length; p++) {
        var firstLetter3 = statesList[p].substring(0, wordLength);
        if (textInput == firstLetter3) {
          appendItem(filteredList, statesList[p]);
        }
      }
    }
  }
  updateScreen();
});



// updateScreen function occurs after the filteredList is completed
// The for-loop goes through every single item in the filteredList and adds the item to the variable "words"
// It sets the "textOutput" equal to the "words" variable/string
function updateScreen() {
var words= "";
if (filteredList.length == 0) {
  words = "Nothing Found!";
} else {
  for (var i = 0; i < filteredList.length; i++) {
    if (i < filteredList.length-1) {
      words = (words + filteredList[i]) + ", ";
    } else {
      words = words + filteredList[i];
    }
  }
}
setText("textOutput", words);
}

