// get the form element 
// add the event listener
// create a callback function
// stop the form to submit by default
// make an click-event listener to get data from the form
// get the user input
// submit user input to the right endpoint
// login user and redirect to profile page
import { LOGIN_URL } from "./constants.mjs";

const loginForm = document.getElementById("login-form");

async function handleLoginUser(userData) {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/JSON"
		},
		body: JSON.stringify(userData),
	};
	const response = await fetch(LOGIN_URL, options);
	const json = await response.json();
	
	// Our data is nested in a "data" field in the data returned by the API

const data = json.data;

// Get the access token
const accessToken = data.acessToken;
// Store the access token
localStorage.setItem("accessToken", accessToken);
}

function handleLoginFormSubmit(event) {
	event.preventDefault();

	let emailElement = document.getElementById("login-email");
	let passwordElement = document.getElementById("login-password");

	const loginUserData = {
		email: emailElement.value,
		password: passwordElement.value,
	};
	handleLoginUser(loginUserData);
	
	// Redirect to profile page if login is okey
	setTimeout(() => (location.href = "./profile/"), 2000);
}

loginForm.addEventListener("submit", handleLoginFormSubmit);
