import React from 'react';
import { Review } from './Review';
import styles from '../styles/ReviewList.module.css';


export function ReviewList({ reviews }) {
    reviews.map((review, index) => console.log(review, index));
    return (
      <ul className={styles.ReviewList}>
        {reviews.map((review, index) => (
          <li key={index}>
            <Review ReviewData={review}/>
          </li>
        ))}
      </ul>
    );
}