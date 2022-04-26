// Import stylesheets
import './style.css';

// Write Javascript code!

/*** ENTER NAMES ***/

// Names array
var names = [];

// Get name function
function askUser() {
  //var nameValue = prompt('Enter name!');

  if (nameValue !== 'end') {
    names[names.length] = nameValue;
    askUser();
  } else {
    displayNames();
  }
}
askUser();

//console.log(names);

// for(var i=0; i < names.length; i++){
//   console.log(names[i]);
// }

function displayNames() {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
