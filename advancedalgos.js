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
