
const API_BASE = "https://v2.api.noroff.dev";
const API_AUTH = "/auth";
const API_REGISTER = "/register";
const API_LOGIN = "/login";
const API_AUCTION = "/auction";
const API_LISTINGS = "/listings";


//fetch data from the API
 async function getListings() {
	const getListingsUrl = `${API_BASE}${API_AUCTION}${API_LISTINGS}`;
	const response = await fetch(getListingsUrl);
	return await response.json();
}
getListings();

//display listings on the page - no auth required
 async function displayListings() {
	const listings = await getListings();
	const data = listings.data;


	 // Sort the data by created date (if not already sorted) and display only the 20 latest
	 const latestListings = data
	 .sort((a, b) => new Date(b.created) - new Date(a.created)) 
	 .slice(0, 20);
   
	const feedContainer = document.getElementById("display-listings-container");
   
	const listItem = latestListings.map((el) => {
	 const title = el.title;
	 const id = el.id;
	 const description = el.description;
	 const imageURL = el.media && el.media.url ? el.media.url : "https://images.unsplash.com/photo-1558293842-c0fd3db86157?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	 const countBids = el._count.bids
	 const created = el.created;
	 const endsAt = el.endsAt;


	 return `
      <div class="col-md-4 mb-4">
        <div class="card">
		<div class="card-body shadow">
		 <h1>${title}</h1>
			 <p>${description}</p>
			 <img class="img-fluid" src=${imageURL} />
			 <p>Posted: ${created}</p>
			 <p>Auction ends: ${endsAt}</p>
			 <p>Bids: ${countBids}</p>
			  <button type="button" class="btn btn-primary" data-bs-toggle="modal"
				   data-bs-target="#staticBackdrop">
				   View item
			   </button>
		</div> 
	 </div> 	
   </div> `
   ;
	});

	const listItemsHTML = listItem.join('');
   
	feedContainer.innerHTML = listItemsHTML;
  };

  displayListings();

  //Search function

const search = document.getElementById("search-input")