function deleteDblChar(string) {                              //function to delete double character
    var newString = '';
    for (var i = 0; i < string.length; i++) {
      if (string.lastIndexOf(string[i]) == string.indexOf(string[i])) {
        newString += string[i];
      }
    }
    dblCharacterOutput.innerHTML = newString.replace(/ /g, '');
}
function palindrome(string) {                               // function to check palindrome
    var re = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(re, '');
    var len = string.length;
    for (var i = 0; i < len/2; i++) {
      if (string[i] !== string[len - 1 - i]) {
        palindromeoutput.innerHTML = false;
        return false;
      }
    }
    palindromeoutput.innerHTML = true;
}

function compareArray(array1, array2) {                 // Function to get common values from array
    var array1  = array1.replace(/ /g, '').split(""),
        array2 = array2.replace(/ /g, '').split("");
    
    var common = $.grep(array1, function(element) {
    return $.inArray(element, array2 ) !== -1;
    });
    comparedArrayData.innerHTML = common;
}
