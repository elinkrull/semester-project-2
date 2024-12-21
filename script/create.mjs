// Get the form element 
// Add the event listener
// Create a callback function
// Stop the form to submit by default
// Make an click-event listener to get data from the form
// Submit the new listing to the right endpoint
// Update the page and display the new listing together with all listings


const createNewListingForm = document.getElementById("create-new-listing-form");

// Add callbackfunction. (HandleCreateNewListingSubmit is passed as an argument to addEventListener, and it will be called automatically when the "submit" event occurs on the createNewListingForm element.)
createNewListingForm.addEventListener("submit", handleCreateNewListingSubmit);

// async function handleCreateListing(listingData) {
// 	const options = {
// 		method
// 	}

// }

// Make a click-event listener to get the data from the form
function handleCreateNewListingSubmit(event) {
	event.preventDefault();

	// Get the form elements
	const createTitle = document.getElementById("create-title");
	const createDescription = document.getElementById("create-description");
	const createEndsAt = document.getElementById("create-ends-at");
	const createImageUrl = document.getElementById("create-image-url");
	const createImageAlt = document.getElementById("create-img-alt");

	// Saving the inputvalues from the form as createListingObject
	const createListingData = {
		title: createTitle.value,
		description: createDescription.value,
		endsAt: createEndsAt.value,
		image: createImageUrl.value,
		imageAlt: createImageAlt.value,
	};

	console.log(createListingData);

	// Passing the object with the input values into the handleCreateListing function
	// handleCreateListing(createListingData);
}


