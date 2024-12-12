// async function searchListings() {
// 	const listings = await getListings();
// 	const data = listings.data;
  
// 	const search = document.getElementById("search-input");
  
// 	search.onkeyup = function(event) {
// 	  const searchValue = event.target.value.trim().toLowerCase();
  
// 	  // Filter listings based on title or description
// 	  const filteredListings = data.filter(function(item) {
// 		return (
// 		  (item.title && item.title.toLowerCase().includes(searchValue)) ||
// 		  (item.description && item.description.toLowerCase().includes(searchValue))
// 		);
// 	  });
  
// 	  // Generate HTML for filtered results
// 	  const filteredItemsHTML = filteredListings.map((el) => {
// 		const title = el.title;
// 		const description = el.description;
// 		const imageURL = el.media && el.media.url
// 		  ? el.media.url
// 		  : "https://images.unsplash.com/photo-1558293842-c0fd3db86157?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// 		const countBids = el._count.bids;
// 		const created = el.created;
// 		const endsAt = el.endsAt;
  
// 		return `
// 		  <div class="col-md-4 mb-4">
// 			<div class="card">
// 			  <div class="card-body shadow">
// 				<h1>${title}</h1>
// 				<p>${description}</p>
// 				<img class="img-fluid" src=${imageURL} />
// 				<p>Posted: ${created}</p>
// 				<p>Auction ends: ${endsAt}</p>
// 				<p>Bids: ${countBids}</p>
// 				<button type="button" class="btn btn-primary" data-bs-toggle="modal"
// 				  data-bs-target="#staticBackdrop">
// 				  View item
// 				</button>
// 			  </div>
// 			</div> 
// 		  </div>`;
// 	  }).join('');
  
// 	  // Update the listings display
// 	  const feedContainer = document.getElementById("display-listings-container");
// 	  feedContainer.innerHTML = filteredItemsHTML;
// 	};
//   }
  
//   // Call the search function
//   searchListings();
  