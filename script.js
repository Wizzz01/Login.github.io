
const title = document.querySelector('#title');

const regForm = document.querySelector('.regForm');


const usernameReg = document.getElementById('usernameReg');
const passwordReg = document.getElementById('passwordReg');


const logForm = document.querySelector('.logForm');

const username = document.getElementById('username');
const password = document.getElementById('password');


const usernameAndPasswords = {}

const time = new Date().toLocaleString();

function checkIfUserExists(username, usernameAndPasswords) {
	if (usernameAndPasswords.hasOwnProperty(username)) {
		return true
	}
}

// For validating username and passwords stored 
function validateUserNameAndPassword(username, password, usernameAndPasswords,) {
	if(usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] == password) {
		return true;
	}
}


regForm.addEventListener('submit', function (e) {
	e.preventDefault();

	// Validate if one of the fields are empty
	if(usernameReg.value.length == 0 || passwordReg.value.length == 0) {
		alert("Fill out all the forms first");
		return;
	}

	// Check password criteria
	if (!validatePassword(passwordReg.value)) {
		alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one non-numeric character.");
		return;
	}

	// Store username and password to JS object
	if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
		alert('Username is already taken');
		return;
	}

	// If all checks pass, proceed with registration
	usernameAndPasswords[usernameReg.value] = passwordReg.value;
	console.log(usernameAndPasswords);

	// Display the login form and hide the registration form
	logForm.style.display = "block";
	regForm.style.display = "none";
});

// Function to validate password criteria
function validatePassword(password) {
    // Check length
    if (password.length < 8) {
        return false;
    }

    // Check if consists of only integers
    if (/^\d+$/.test(password)) {
        return false;
    }

    // Check if combination of uppercase and lowercase characters
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        return false;
    }

    return true;
}



logForm.addEventListener('submit', function (e) {

	// Passing username and password to the function
	if (validateUserNameAndPassword(username.value, password.value, usernameAndPasswords)) {

		// Hide the login form and title after user has been validated
		logForm.style.display = "none";
		title.style.display = "none";

		// Greet user who just logged in
		document.querySelector('.welcomePanel #greeting').innerHTML = "Good day! " + username.value + ". It's currently " + time;
	}
	else {

		// Login invalid
		alert("Username and password don't exist");

	}

})

