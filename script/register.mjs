import { REGISTRATION_URL } from "./constants.mjs";
import { doFetch } from "./doFetch.mjs";

// get the form element
// stop the form to submit by default
// make an click-event listener to get data from the form
// get the user input
// submit user input to the right endpoint


let registrationForm = document.getElementById("registration-form");

async function registerUser(userData) {
	const options = {
		method: "POST",
		body: JSON.stringify(userData),
		};
		await doFetch(REGISTRATION_URL, options);
	}

function handleFormSubmit(event) {
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
	console.log(userData);
}

registrationForm.addEventListener("submit", handleFormSubmit);