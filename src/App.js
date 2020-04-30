import React from 'react';
import Movie from './Movie';

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
const movies = [
  { title: 'Avengers:Endgame', poster: '' },
  { title: 'Harry Potter and the Deathly Hallows', poster: '' },
  { title: 'the Lord of the Rings: the Return of the King', poster: '' },
  { title: 'Star Wars', poster: '' },
];
const App = () => {
  return (
    <>
      {movies.map((movie) => {
        <Movie title={movie.title} poster={movie.poster} />;
      })}
    </>
  );
};

export default App;
