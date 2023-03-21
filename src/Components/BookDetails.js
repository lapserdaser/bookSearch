import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import getBook from "./getBook";

const BookDetails = () => {

	let { id } = useParams();
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBook(id)
			.then((data) => {
				setBooks(data.items);
			})
	}, [])

	const book = books?.filter((item) => item.id === id)[0];
	const img = book?.volumeInfo.imageLinks?.thumbnail || '',
		title = book?.volumeInfo.title,
		authors = book?.volumeInfo.authors,
		category = book?.volumeInfo.categories,
		description = book?.volumeInfo.description;

	return (
		<>
		
			<div className="container__details">
				<Link className="home__link" to={`/`}>RETURN</Link>
				<div className="book__image">
					<img src={img} alt={title} />
				</div>
				<div className="book__text">
					<h2 className="book__title">{title}</h2>
					<h4 className="book__categoy">{category}</h4>
					<h6 className="book__authors">{authors}</h6>
					<p className="book__desk">{description}</p>
				</div>
			</div>
		</>
	)



}

export default BookDetails;