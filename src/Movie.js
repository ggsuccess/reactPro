import React from 'react';
import './Movie.css';

const Movie = ({ title, image, synopsis }) => {
  // const { title, poster } = props;
  return (
    <>
      <div className="movie">
        <h1>{title}</h1>
        <img src={image} alt="poster" />
        <p>{synopsis}</p>
      </div>
    </>
  );
};

export default Movie;
