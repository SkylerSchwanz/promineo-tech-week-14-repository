import React from 'react'; // Import React
import styles from '../styles/Info.module.css';

import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Stars } from './Stars';

export function Info( { onCloseInfo , movie, formattedTime, rating, reviews, setReviews} ) {
    const { releaseDate, genre, name, director, id } = movie;

    return (
      <div className={styles.InfoBody}>
        <button className={styles.BackButton} onClick={onCloseInfo}>
          <FontAwesomeIcon icon={faAngleLeft} />
          <h1>Back</h1>
        </button>
        <div className={styles.MovieInfo}>
          <div className={styles.MovieNameRating}>
            <h2>{name}</h2>
            <Stars form={false} rating={rating} />
          </div>
          <p>Director: {director}</p>
          <p>Runtime: {formattedTime}</p>
          <p>Release date: {releaseDate}</p>
          <p>Genre: {genre}</p>
        </div>
        <div>
          <ReviewForm setReviews={setReviews} />
          <ReviewList reviews={reviews} />
        </div>
      </div>
    );
}
