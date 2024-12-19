//get the form element
//stop the form to submit by default
//make an click-event listener to get data from the form
//get the user input
//check if the user is authorized
//submit user input to the right endpoint
//login user and redirect to profile if user is authorized

const loginForm = document.getElementById("login-form");
console.log(loginForm);

function formSubmit(event) {
	event.preventDefault();

	let emailElement = document.getElementById("login-email");
	let passwordElement = document.getElementById("login-password");

	const loginUserData = {
		email: emailElement.value,
		password: passwordElement.value,
	};
	console.log(loginUserData);
}

