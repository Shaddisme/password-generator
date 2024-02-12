function generatePassword() {
    var length = prompt("Enter the length of the password (between 8 and 128 characters):");
    if (length === null) return; // User pressed cancel
            
    length = parseInt(length);

    if (isNaN(length) || length < 8 || length > 128) {
        alert("Invalid length. Please enter a number between 8 and 128.");
        return;
    }

    var lowercase = confirm("Do you want to include lowercase characters?");
    var uppercase = confirm("Do you want to include uppercase characters?");
    var numeric = confirm("Do you want to include numeric characters?");
    var special = confirm("Do you want to include special characters?");

    if (!lowercase && !uppercase && !numeric && !special) {
        alert("You must select at least one character type.");
        return;
    }

    var characterSet = "";
    var password = "";

    if (lowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numeric) characterSet += "0123456789";
    if (special) characterSet += "$@%&*";

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    alert("Your generated password is: " + password);
}
