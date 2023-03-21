const getBook = (query) => {
	if (!query) query = 'react';
	return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyClnAQpegD3-rFtHWCxk1tGzKcQlAlwuvQ`).then(
		(res) => {
			if (!res.ok) {
				throw new Error("Ooops! Couldn't fetch the data");
			}
			return res.json();
		}
	);
};

export default getBook;