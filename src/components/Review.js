import React from 'react';
import { Stars } from './Stars';
import styles from '../styles/Review.module.css';

export function Review(  { ReviewData } ) {
    const { name, body, rating, date } = ReviewData;

    return (
      <div className={styles.MainDiv}>
        <div className={styles.NameDiv}>
          <h2>{name}</h2>
          <Stars form={false} rating={rating} />
        </div>
        <div>
          <p>{body}</p>
        </div>
        <span>Submitted on {date}</span>
      </div>
    );
}