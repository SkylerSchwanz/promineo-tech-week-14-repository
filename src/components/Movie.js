import React, { useState, useEffect, useRef, createContext } from 'react';
import { moviesData } from '../movies';
import { Stars } from '../components/Stars';
import { Info } from './info'; // Adjust the path

import styles from '../styles/Movie.module.css'

const imgDir = '../../movie-images/';

export const Movie = ({ id }) => {
  const [movies, handleChange] = useState(moviesData);

  // Find specific movie in movies state.
  const movie = movies.find((movie) => movie.id === id);

  // Getting and formatting variables from movie
  const { runtime, releaseDate, genre, name } = movie;
  const MovieName = movie.name
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
  const FormattedRuntime = Math.floor(runtime / 60) > 0 ? `${Math.floor(runtime / 60)}h ${runtime % 60}m` : `${runtime % 60}m`;

  // RATING LOGIC

  // Creating state for reviews and rating.
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  // calculate rating
  const calculateRating = () => {
    const newRating = reviews.length > 0 ? Math.round((reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length) * 10) / 10 : 0;
    setRating(newRating);
  };

  // update rating when review is added.
  useEffect(() => {
    calculateRating();
  }, [reviews]);

  // INFO LOGIC

  // State for info component
  const [showInfo, setShowInfo] = useState(false);

  // Callback function to close Info page
  const closeInfoPage = () => {
    setShowInfo(false);
  };

  return (
    <div className={styles.MovieContainer}>
      <button onClick={() => setShowInfo(!showInfo)}>
        <img className={styles.MovieImage} src={`${imgDir}${MovieName}.jpg`} alt={name} />
        <div>
          <div className={styles.NameRating}>
            <h3>{name}</h3>
            <Stars form={false} rating={rating} />
          </div>
          <div>
            <span>{releaseDate}</span>
            <span>{FormattedRuntime}</span>
          </div>
          <span>{genre}</span>
        </div>
      </button>
      {showInfo && <div className={styles.overlay}></div>}
      {showInfo && <Info onCloseInfo={closeInfoPage} movie={movie} formattedTime={FormattedRuntime} reviews={reviews} rating={rating} setReviews={setReviews} />}
      {/* Conditionally render the Info component */}
    </div>
  );
};
