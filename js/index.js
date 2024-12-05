
const API_BASE = "https://v2.api.noroff.dev";
const API_AUTH = "/auth";
const API_REGISTER = "/register";
const API_LOGIN = "/login";
const API_AUCTION = "/auction";
const API_LISTINGS = "/listings";

//display all listings - no auth required



//fetch data from the API
 async function getListings() {
	const getListingsUrl = `${API_BASE}${API_AUCTION}${API_LISTINGS}`;
	const response = await fetch(getListingsUrl);
	return await response.json();
}
getListings();

// get listings as an array
// async function getListingsData() {
// 	const listings = await getListings();
// 	console.log(listings.data);
//  };

//  getListingsData();

 async function displayListings() {
	const listings = await getListings();
	const data = listings.data;
   
	const feedContainer = document.getElementById("display-listings-container");
   
	const listItem = data.map((el) => {
	 const title = el.title;
	 const description = el.description;
	 const id = el.id;
	 const imageURL = el.media && el.media.url ? el.media.url : "https://images.unsplash.com/photo-1558293842-c0fd3db86157?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	 const created = el.created;
	 const endsAt = el.endsAt;


	 return `<div class="card shadow mt-5 mx-3 mb-3 col-md-8 col-lg-6 col-xl-8">
	 <div class="card-body row">
		 <p>${title}</p>
			 <p>${id}</p>
			 <p>${description}</p>
			 <img src=${imageURL} />
			 <p>Posted: ${created}</p>
			 <p>Auction ends: ${endsAt}</p>
	 </div>
   </div>`;
	});

	const listItemsHTML = listItem.join('');
   
	feedContainer.innerHTML = listItemsHTML;
  };

  displayListings();