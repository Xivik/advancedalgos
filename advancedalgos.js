// Validate US Phone Numbers


function telephoneCheck(str) {
  // create regex
 const phone = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if(phone.test(str)) {
     return true;
  } else {
    return false;
  }
}
telephoneCheck("555-555-5555");

// Record Collection, You are given a JSON object representing a part
// of your musical album collection. Each album has several properties and a unique id number 
// as its key. Not all albums have complete information.

// Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), 
// and a value (like "Addicted to Love") to modify the data in this collection.


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  // if value is "" delete it and return, no need to do anymore
  if (value == "") {
      
      delete collection[id][prop];
      return collection;
      // else if it is tracks, see if it has the prop, otherwise create and arr
      // and set the created array is the value
  }  else if (prop == "tracks") {
        if (collection[id].hasOwnProperty(prop) == false) {
        
          let tracksArr = [];
          tracksArr.push(value);
          collection[id][prop] = tracksArr;
          // if there's already a value, just push onto it
        } else {
          collection[id][prop].push(value);
        }
  // check if it has prop, else create and set it
  } else if (collection[id].hasOwnProperty(prop) == false) {
    collection[id][prop] = value;  
  }

  return collection;
}

// Alter values below to test your code
updateRecords(1245, "tracks", "Addicted to Love");

// Palindrome Checker

function palindrome(str) {
  // convert string to lowercase, remove all non alphanumeric chars
  str = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
// create a copy for comparison and reverse it.
const strRev = str.split("").reverse().join("");
  console.log(str, strRev);
  if (str === strRev) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");

// Roman Numerals

const romanArr = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function convertToRoman(num) {
// create empty array to push romans on.
 const romans = [];
 let calcNum = num;
 // loop through array 
 for (let i = 0; i<romanArr.length; i++) {
   // if num divided by highest number in array is more then 0.
   if (calcNum / romanArr[i][0] > 0) {
     // calculate the amount of romans need to be added by rounding.
     let divTime = Math.floor(calcNum / romanArr[i][0]);
     while(divTime >= 1) {
     romans.push(romanArr[i][1]);
     divTime--;
     }
      // calculate the rest for the next iteration
     calcNum = calcNum % romanArr[i][0];
   }
 }
 // convert array back to string
 const romanStr = romans.join("");
return romanStr;
}

convertToRoman(36);

// Caesars Cipher

function rot13(str) {
  // split string into array so we can manipulate the data
  return str.split('')
  .map
  // map over the array, we need to use .call to use the string method charCodeAt
  .call(str, char => {
      // get value of character in the current spot
     const charCode = char.charCodeAt(0);
     // if the character is non alphanumeric, just pass them on.
      if (charCode < 65 || charCode > 90) {
        return String.fromCharCode(charCode);  
      }
     // if the value is less then 78(N) add 13
      else if (charCode < 78) {
        return String.fromCharCode(charCode + 13);
      }
      // if the value is over 78(N) subtract 13
      return String.fromCharCode(charCode - 13);
    })
    // turn array back into a string
    .join(''); 
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");