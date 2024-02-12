// Added an event listener to the button trigger password generaton.
document.getElementById('generateButton').addEventListener('click', function() {
// this command is to ask the user for the desired password length.
    var length= prompt("Enter the length of the password (betweeen 8 and 128 characters):");
// validate the password length input.
   if (length === null || length === "" || isNaN(length)) {
    alert("Invalid input for password length. Please enter a valid number.");
    return;
   } 

   length = parseInt(length);

   if (length < 8 || length > 128) {
    alert("Invalid password length. Password lenth must be between 8 and 128 characters.");
    return;
   }
// Ask the user about their preferences for the password.
   var includeUppercase = confirm("Do yo want to include uppercase characters?");
   var includeLowercase = confirm("do you want to include lowercase characters?");
   var includeNumbers = confirm("Do you want to include numbers?");
   var includePunctuation = confirm("Do you want to include punctuatio characters?");
// Generate the password based on user's preferences.
var characterSet = '';
var password = '';

if (includeUppercase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (includeLowercase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
if (includeNumbers) characterSet += '0123456789';
if (includePunctuation) characterSet += '$@%&*';
// Ensure atleast one character set is selected.
   if (characterSet === '') {
    alert("Please select at least one character set.");
    return;
   }

   for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password =+ characterSet[randomIndex];
   }
// To display the generated password in the text area.
   document.getElementById('passwardDisplay').value = password;
})