import React from 'react';
import '../App.css';
import Review from './Review';

export default function Reviews({ album, setAlbum }) {
	return (
		<div>
			<h1>Reviews</h1>
			<div className='reviews-container'>
				{album.reviews.map((review) => {
					return (
						<Review
							album={album}
							review={review}
							key={review._id}
							id={review._id}
							setAlbum={setAlbum}
						/>
					);
				})}
			</div>
		</div>
	);
}
