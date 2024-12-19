import { REGISTRATION_URL } from "./constants.mjs";

//get the form element
//stop the form to submit by default
//make an click-event listener to get data from the form
//get the user input
//submit user input to the right endpoint


let registrationFrom = document.getElementById("registration-form");

async function registerUser(userData) {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/JSON"
		},
		body: JSON.stringify(userData),
	};
	const response = await fetch("REGISTRATION_URL", options);
	console.log(response);
}

function formSubmit(event) {
	event.preventDefault();

	let nameElement = document.getElementById("reg-name");
	let emailElement = document.getElementById("reg-email");
	let passwordElement = document.getElementById("reg-password");

	const userData = {
		name: nameElement.value,
		email: emailElement.value,
		password: passwordElement.value
	};
	registerUser(userData);
}

registrationFrom.addEventListener("submit", formSubmit);