import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Stars.module.css';

export function Stars({ form, rating, handleRatingChange }) {
  if (!form) {
    return (
      <div className={styles.starsDiv}>
        <FontAwesomeIcon icon={faStar} style={{ color: 'cornflowerblue' }}></FontAwesomeIcon>
        <h4>{rating}</h4>
      </div>
    );
  } else {
    return (
      <ul className={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <li key={star}>
            <label htmlFor={`star-${star}`} className={styles.starLabel}>
              <input
                required
                type="radio"
                name="rating"
                onChange={() => handleRatingChange(star)}
                value={star}
                className={styles.starInput}
                id={`star-${star}`}
              />
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
            </label>
          </li>
        ))}
      </ul>
    );
  }
}
