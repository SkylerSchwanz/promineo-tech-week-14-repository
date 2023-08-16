import React from 'react';
import styles from '../styles/MovieList.module.css'
import { moviesData } from '../movies';
import { Movie } from './Movie';

export function MovieList({ genre } ) {
    console.log(genre);
    
    return (
      <div className={styles.MovieListContainer}>
        <h1 style={{color: 'whitesmoke'}}>{genre} Moviess</h1>
        <ul className={styles.MovieList}>
            {moviesData.filter(movie => movie.genre === genre).map((movie, index) => (
            <li key={index}>
                <Movie id={movie.id} />
            </li>
            ))}
        </ul>
      </div>
    );
}