function getParameters() {
	let urlParameters = new URLSearchParams(window.location.search).entries();
	let dict = [];
	urlParameters.forEach(function (arr) {
		dict[arr[0]] = arr[1];
	})
	return dict;
}

//saving this function for later use.