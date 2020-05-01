import React, { useState } from 'react';
import Movie from './Movie';
import Input from './Input';

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
  const movies = [
    {
      title: 'Avengers:Endgame',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
      id: 0,
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/d/df/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2.jpg',
      id: 1,
    },
    {
      title: 'the Lord of the Rings: the Return of the King',
      poster:
        'https://img.discogs.com/Sms0zP1IMbStl_jmnnU0wNKNX3o=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12458994-1535698027-9920.jpeg.jpg',
      id: 2,
    },
    {
      title: 'Star Wars the rise of skywalker',
      poster:
        'https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372',
      id: 3,
    },
  ];
  // movies.map((movie) => {
  //   return (
  //     <div>
  //       <Movie key={movie.id} title={movie.title} poster={movie.poster} />
  //     </div>
  //   );
  // });
  return (
    <>
      <Input />
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} poster={movie.poster} />
      ))}
    </>
  );
};

export default App;
