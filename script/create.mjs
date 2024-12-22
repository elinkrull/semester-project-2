// Get the form element 
// Add the event listener
// Create a callback function
// Stop the form to submit by default
// Make an click-event listener to get data from the form
// Submit the new listing to the right endpoint
// Update the page and display the new listing together with all listings

import { LISTINGS_URL } from "./constants.mjs";
import { doFetch } from "./doFetch.mjs";

const createNewListingForm = document.getElementById("create-new-listing-form");
console.log(createNewListingForm);

// Add callbackfunction. (HandleCreateNewListingSubmit is passed as an argument to addEventListener, and it will be called automatically when the "submit" event occurs on the createNewListingForm element.)
createNewListingForm.addEventListener("submit", handleCreateNewListingSubmit);

async function createListing(listingData) {
	const options = {
		method: "POST",
		body: JSON.stringify(listingData),
		};

		try {
	 	await doFetch(LISTINGS_URL, options, true);
		console.log("Listing successfully created");
	  } catch (error) {
		console.error("Failed to create listing:", error);
	  }
}


// Make a click-event listener to get the data from the form
function handleCreateNewListingSubmit(event) {
	event.preventDefault();
	console.log("Hello");

	// Get the form elements
	const title = document.getElementById("create-title");
	const description = document.getElementById("create-description");
	const endsAt = document.getElementById("create-ends-at");

	// Saving the inputvalues from the form as createListingObject
	const listingData = {
		title: title.value,
		description: description.value,
		endsAt: new Date(endsAt.value).toISOString(),
	};

	createListing(listingData);

	}


