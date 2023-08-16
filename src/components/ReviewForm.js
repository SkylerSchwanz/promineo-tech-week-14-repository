import React, { useState } from 'react';
import styles from '../styles/ReviewForm.module.css';
import { Stars } from './Stars';

export function ReviewForm({ setReviews }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    console.log(newRating);
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newReview = {
      name: name,
      rating: rating,
      body: review,
      date: formattedDate,
    };

    // Update the movie's reviews using setReviews function
    setReviews((prevReviews) => [...prevReviews, newReview]);

    // Clear form fields
    setName('');
    setRating(0);
    setReview('');
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Zero-padding the month
  const day = String(currentDate.getDate()).padStart(2, '0'); // Zero-padding the day
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <form onSubmit={handleSubmit}>
        <div className={styles.NameRatingSubmit}>
            <div className={styles.NameDiv}>
                <label htmlFor="Name">Name</label>
                <input required type="text" id="Name" placeholder="John Doe" className={styles.nameInput} value={name} onChange={handleNameChange} />
            </div>

            <div className={styles.RatingDiv}>
                <label htmlFor="Rating">Rating</label>
                <Stars form={true} className={styles.stars} handleRatingChange={handleRatingChange} />
            </div>

            <button type="submit" className={styles.SubmitButton}>
                Submit
            </button>
            </div>

            <div className={styles.BodyDiv}>
                <label htmlFor="Body">Review</label>
                <div className={styles.BodyInputDiv}>
                    <textarea required id="Body" className={styles.bodyInput} value={review} onChange={handleReviewChange}></textarea>
                </div>
            </div>
    </form>
  );
}
