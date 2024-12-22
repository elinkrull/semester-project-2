import { LISTINGS_URL } from "./constants.mjs";

// Fetch data from the API
async function renderListings() {
    try {
        const response = await fetch(LISTINGS_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching listings:", error);
        return null; // Return null to handle errors gracefully
    }
}

// Display listings on the page - no auth required
async function displayListings() {
    const listings = await renderListings();
    if (!listings || !listings.data) {
        console.error("No listings data available");
        return;
    }

    const data = listings.data;

    // Select the container to display listings
    const feedContainer = document.getElementById("display-listings-container");
    if (!feedContainer) {
        console.error("Container element with id 'display-listings-container' not found");
        return;
    }

    // Create HTML for each listing
    const listItem = data.map((el) => {
        const title = el.title || "No title available";
        const description = el.description || "No description available";
		const imageURL = el.media.length
		? `<img class="img-fluid mb-2" src="${el.media[0].url}" alt="Listing image" />`
		: `<img class="img-fluid" src="https://images.unsplash.com/photo-1558293842-c0fd3db86157?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Default image" />`;
        const endsAt = el.endsAt ? new Date(el.endsAt).toLocaleString() : "No end date available";

        // Generate HTML structure for a single listing
        return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body shadow">
				<div>${imageURL}</div>
                    <h1>${title}</h1>
                    <p>${description}</p>
                    <p>Auction ends: ${endsAt}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        View item
                    </button>
                </div> 
            </div>
        </div>`;
    });

    // Insert listings into the container
    feedContainer.innerHTML = listItem.join("");
}

// Initialize the listings display
displayListings();
