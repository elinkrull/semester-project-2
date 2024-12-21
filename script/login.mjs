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

loginForm.addEventListener("submit", handleLoginFormSubmit);

async function handleLoginUser(userData) {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/JSON",
		},
		body: JSON.stringify(userData),
	};
	// The fetch gives back the response
	const response = await fetch(LOGIN_URL, options);
	
	const json = await response.json();
	// Inside of the json there is a data object we want to get
	const data = json.data;
	// Get the accessToken out of the data object 
	const accessToken = data.accessToken;
	// Store the accesstoken in localStorage
	localStorage.setItem("accessToken", accessToken );
}

function handleLoginFormSubmit(event) {
	event.preventDefault();

	let emailElement = document.getElementById("login-email");
	let passwordElement = document.getElementById("login-password");

	// Saving the inputvalues from the form as loginUserData object
	const loginUserData = {
		email: emailElement.value,
		password: passwordElement.value,
	};

	// Passing the object with the input values into the handleLoginUser function
	handleLoginUser(loginUserData);
	
	// Redirect to listings page if login is okey
	setTimeout(() => (location.href = "./listings/"), 2000);
}

