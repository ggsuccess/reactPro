import React, { useState, useEffect } from 'react';
//import Movie from './Movie';
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
        'https://yts.ag/api/v2/list_movies.json?sort_by=rating',
        {
          mode: 'cors',
          headers: { 'Access-Control-Allow-Origin': 'http://yts.ag/' },
        }
      );
      res
        .json()
        .then((res) => console.log(JSON.stringify(res)))
        .catch((err) => console.error(err));
    }
    fetchMovies();
  });
  return <></>;
};

export default App;
