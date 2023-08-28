import React from 'react';
import ReactDOM from 'react-dom/client';
import { MovieList } from './components/MovieList';
import HeaderTitle from './components/HeaderTitle';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderTitle title="ScreenSavvy" tagline="Your Movie Review Destination" />
    <MovieList genre="Action" />
    <MovieList genre="Thriller" />
    <MovieList genre="Science Fiction" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
