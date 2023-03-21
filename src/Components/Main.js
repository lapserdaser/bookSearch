import React, { useState } from "react";
import { FcSearch } from 'react-icons/fc';
import getBook from "./getBook";
import loadingImg from '../image/loadingImg.gif';


import Card from '../Components/Card';
import axios from 'axios';




const Main = () => {

	const [index, setIndex] = useState(0);
	const [search, setSearch] = useState('');
	const [book, setBooks] = useState([]);
	const [noResult, setNoResult] = useState('');
	const [bookData, setData] = useState([]);
	const [totalResult, setTotalResult] = useState(0);
	const [category, setCategory] = useState('computer');
	const [order, setOrder] = useState('relevance');
	const [loading, setLoading] = useState(false);


	const searchBook = async (evt) => {
		setLoading(true);
		setNoResult('');
		if (evt.key === "Enter") {
			await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&orderBy=' + order + '&key=AIzaSyClnAQpegD3-rFtHWCxk1tGzKcQlAlwuvQ' + '&startIndex=' + index + '&maxResults=30')
				.then(res => {
					setLoading(false);
					const volumes = res.data.Items;
					setData(res.data.items);
					setTotalResult(res.data.totalItems);
					if (volumes) {
						let filterVolumes = volumes;
						if (category !== 'all') {
							filterVolumes = volumes.filter(bookData => bookData.volumeInfo.categories?.find(element => element.toLowerCase().includes(category)));
							setTotalResult(filterVolumes.length);
							console.log(setTotalResult)
						}
						if (filterVolumes.length === 0) setNoResult('Nothing found');
						return filterVolumes;
					}
					else {
						setNoResult('Nothing found');
						return [];
					}
				}
				)
				.catch(e => {
					setNoResult('error during request');
					setLoading(false);
					console.error(e);
					return []
				})

		}
	}
	return (
		<>
			<div className="main">
				<h1 className="title">Search your books</h1>
				<div className="search">
					<input className="input" type="text" placeholder="Name your book" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} />
					<button className="button" onKeyPress={searchBook}><FcSearch /></button>
				</div>
				<div>
				</div>
			</div>
			{totalResult > 0 ? <div className="books__total"> {totalResult} a found</div> : <div className="books__total">{noResult}</div>}

			<div className="container">
				{
					bookData === undefined ? null : <Card book={bookData} />
				}
				{loading ? <img className="books__loading" src={loadingImg} alt="loading" /> : null}
			</div>

		</>
	)
}

export default Main;