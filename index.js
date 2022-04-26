import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

/*** ENTER NAMES ***/

// Names array
var names = [];

// Get name function
function askUser() {
  // Enter names
  //var nameValue = prompt('Enter name!');

  if (nameValue !== 'end') {
    names[names.length] = nameValue;
    askUser();
  } else {
    displayNames();
  }
}
askUser();

// Display names function
var namesArray = document.querySelector('#namesArray');
function displayNames() {

  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }

  console.log(names);
  namesArray.innerHTML = names;
}
