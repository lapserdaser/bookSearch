import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ book }) => {
	console.log(book)

	return (
		<>
			{


				book.map((item, index) => {
					const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
					const categories = item.volumeInfo.categories && item.volumeInfo.categories;
					const authors = item.volumeInfo.authors && item.volumeInfo.authors;
					const title = item.volumeInfo.title;

					return (
						<Link to={`/BookDetails/${item.id}`} className="card" key={index}>
							<div className="image"><img src={thumbnail} alt={title} /></div>
							<p className="category">{categories}</p>
							<p className="name">{title}</p>
							<p className="author">{authors}</p>
						</Link>
					)
				})
			}
		</>
	)
}


export default Card;