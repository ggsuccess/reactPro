import React, { useState, useEffect } from 'react';
import Movie from './Movie';
//import Input from './Input';

// const App = () => {
//   const [value, setValue] = useState(0);
//   return (
//     <>
//       <p>current count:{value}</p>
//       <button onClick={() => setValue(value + 1)}>click!up</button>
//       <button onClick={() => setValue(value - 1)}>click!down</button>
//     </>
//   );
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
      );
      // res.data.movies안에 영화정보가 들어옴
      res
        .json()
        .then((res) => setMovies(() => movies.concat(res.data.movies)))
        .catch((err) => console.error(err));
    }
    fetchMovies();
  });
  return (
    <>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          image={movie.background_image}
        />
      ))}
    </>
  );
};

export default App;
