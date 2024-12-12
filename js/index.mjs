const API_KEY = "62625b80-3f6a-4daf-ba5d-d427902ad9ba";

const API_BASE = "https://v2.api.noroff.dev";
const API_AUTH = "/auth";
const API_REGISTER = "/register";
const API_LOGIN = "/login";
const API_AUCTION = "/auction";
const API_LISTINGS = "/listings";

function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
	return JSON.parse(localStorage.getItem(key));
}

//register user
async function register(name, email, password) {
	try {
		const registerUrl = `${API_BASE}${API_AUTH}${API_REGISTER}`;

		const response = await fetch(registerUrl, {
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify({ name, email, password })
		});

		
	if (response.ok) {
		const data = await response.json();
		console.log("Registration successful:", data);
		return data;
	} else {
		const errorData = await response.json();
		console.error("Registration failed:", errorData);
		throw new Error("Could not register the account");
	}
} 	catch(error) {
	console.error("An error occured during registration:", error);
	throw error;
}
}

//login user
async function login(email, password) {
	const loginUrl = `${API_BASE}${API_AUTH}${API_LOGIN}`;
const response = await fetch(loginUrl, {
  headers: {
    "Content-Type": "application/json"
  },
  method: "POST",
  body: JSON.stringify({ email, password })
});
	if (response.ok) {
		const { accessToken, ...profile } = (await response.json()).data;
		save("token", accessToken);
		save("profile", profile);
		window.location.href = "./profile/index.html";
		return profile;
	}
		throw new Error("Could not login");
}


async function onAuth(event) {
	event.preventDefault();
	const regName = document.getElementById("reg-name").value.trim();
	const regEmail = document.getElementById("reg-password").value.trim();
	const regPassword = document.getElementById("reg-password").value.trim();
	const loginEmail = document.getElementById("login-email").value.trim();
	const loginPassword = document.getElementById("login-password").value.trim();

	if (location.pathname.includes("/register")) {
		await register(regName, regEmail, regPassword);
		await login(loginEmail, loginPassword);
	}
		await login(loginEmail, loginPassword);
		console.log(login);
}

async function setAuthListener() {
	document.forms.auth.addEventListener("submit", onAuth);
}

setAuthListener()



//fetch data from the API
 async function renderListings() {
	try {
	const getListingsUrl = `${API_BASE}${API_AUCTION}${API_LISTINGS}`;
	const response = await fetch(getListingsUrl);
	return await response.json();
	}
	catch(error) {
		console.log(error)
	}
 }
	
renderListings();


//display listings on the page - no auth required
 async function displayListings() {
	const listings = await renderListings();
	const data = listings.data;


	//  Sort the data by created date 
	//  const latestListings = data
	//  .sort((a, b) => new Date(b.created) - new Date(a.created)) 
   
	const feedContainer = document.getElementById("display-listings-container");
   
	const listItem = data.map((el) => {
	 const title = el.title;
	//  const id = el.id;
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

