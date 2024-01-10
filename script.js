// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var pasLenChecked;
var i=0;
var passLength=0;
var userCharType=0;
var isNumIncluded;
var islowercharacterIncluded;
var isuppercharacterIncluded;
var isspecialcharacterIncluded;
// Function to prompt user for password options
function getPasswordOptions(passLength) {
  isNumIncluded=confirm("can i include number Number?");
    islowercharacterIncluded=confirm("can i include number lowercharacter?");
    isuppercharacterIncluded=confirm("can i include number uppercharacter?");
    isspecialcharacterIncluded=confirm("can i include number specialcharacter?");
    
        if(!(isNumIncluded||islowercharacterIncluded||isuppercharacterIncluded||isspecialcharacterIncluded)){
            alert("Must select atleast one character type");
            console.log("check1 isnum:",isNumIncluded+" "+ islowercharacterIncluded+" "+isuppercharacterIncluded+" "+isspecialcharacterIncluded);
            return;
          }
          var characters = [];

          if (includeNumeric=true) {
            characters = characters.concat(numericCharacters);
            console.log("check2 isnum:",characters);
            
          }
        
          if (includeLowercase=true) {
            characters = characters.concat(lowerCasedCharacters);
            console.log("check3 isnum:",characters);
          }
        
          if (includeUppercase=true) {
            characters = characters.concat(upperCasedCharacters);
            console.log("check4 isnum:",characters);
          }
        
          if (includeSpecial=true) {
            characters = characters.concat(specialCharacters);
            console.log("check5 isnum:",characters);
          }
      var createdpassword = "";
          for (var i = 0; i < passLength; i++) {
            createdpassword += getRandom(characters);
            console.log("check6 isnum:",createdpassword);
          }
         return createdpassword;
}

// Function for getting a random element from an array
function getRandom(arr) {
  //console.log("check7:",Math.floor(Math.random() * arr.));
   var j =0;
   j= Math.floor(Math.random() * arr.length);
   console.log(j);
  return arr[j];
}

// Function to generate password with user input
function generatePassword() {
//while(pasLenChecked){
  passLength = parseInt(prompt("Enter the length of password: "));
  validatepass(passLength);
  getPasswordOptions(passLength);
  //getRandom(arr);
//}
/*while(!pasLenChecked){
  alert("Please enter a number between 8 to 128");
  console.log("pasLenChecked2: ",pasLenChecked);
  passLength = parseInt(prompt("Enter the length of password: "));
  console.log(passLength);
  validatepass(passLength); 
  getPasswordOptions(passLength);
  }*/
  
}

function validatepass(passLength){
  if(passLength >= 8 && passLength <=128){
    pasLenChecked=true;
    console.log("pasLenChecked1: ",pasLenChecked);
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password ="";
  password= generatePassword();
  var passwordText ="";
  passwordText= document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);