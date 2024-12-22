// Using a try and catch block in async functions

// Spread out all the values in customOptions in the header and in options object. Customoptions is set to an empty object by default.
export async function doFetch(url, customOptions = {}, useAuth = false) {
	try {
		const options = {
			headers: {
				"Content-Type": "application/json",
				...customOptions.headers,
			},
			...customOptions,
		};

		if (useAuth) {
			const accessToken = localStorage.getItem("accessToken");
			options.headers.Authorization = `Bearer ${accessToken}`;
			options.headers["X-Noroff-API-Key"] = "7f5bde89-eea6-49f4-8666-7ea570bcfcdf";
		}
		const response = await fetch(url, options);
		const json = await response.json();
		return json();

	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
}