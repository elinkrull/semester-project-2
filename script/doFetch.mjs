// Using a try and catch block in async functions

// Spread out all the values in customOptions in the header and in options object. Customoptions is set to an empty object by default.
export async function doFetch(url, customOptions = {}) {
	try {
		const options = {
			headers: {
				"Content-Type": "application/JSON",
				...customOptions.headers,
			},
			...customOptions,
		};
		const response = await fetch(url, options);
	const json = await response.json();
	return json();

	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
}