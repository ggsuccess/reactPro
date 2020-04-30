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

const App = () => {
  const movies = [
    {
      title: 'Avengers:Endgame',
      poster:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F0%2F0d%2FAvengers_Endgame_poster.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAvengers%3A_Endgame&tbnid=_TRnVg7mD1ea0M&vet=12ahUKEwiey8mflZDpAhWKAaYKHYGmAIsQMygAegUIARD0AQ..i&docid=AaNvJk3s-z7ZVM&w=220&h=326&q=avengers%20endgame&ved=2ahUKEwiey8mflZDpAhWKAaYKHYGmAIsQMygAegUIARD0AQ',
      id: 0,
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      poster:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fd%2Fdf%2FHarry_Potter_and_the_Deathly_Hallows_%25E2%2580%2593_Part_2.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHarry_Potter_and_the_Deathly_Hallows_%25E2%2580%2593_Part_2&tbnid=OTUWEOK4kqZeOM&vet=12ahUKEwi0uO65lZDpAhUDHKYKHQQBBN4QMygBegUIARCLAg..i&docid=VpftriVbeSzmTM&w=220&h=330&q=harry%20potter%20and%20the%20deathly%20hallows&ved=2ahUKEwi0uO65lZDpAhUDHKYKHQQBBN4QMygBegUIARCLAg',
      id: 1,
    },
    {
      title: 'the Lord of the Rings: the Return of the King',
      poster:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.discogs.com%2FSms0zP1IMbStl_jmnnU0wNKNX3o%3D%2Ffit-in%2F300x300%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(40)%2Fdiscogs-images%2FR-12458994-1535698027-9920.jpeg.jpg&imgrefurl=https%3A%2F%2Fwww.discogs.com%2Fko%2FHoward-Shore-The-Lord-of-the-Rings-The-Return-of-the-King%2Frelease%2F12458994&tbnid=XO3DXU7uIyXzeM&vet=12ahUKEwiz1Z6ckZDpAhUK_JQKHe3iD5sQMygBegUIARDeAQ..i&docid=9Phv9QREMV-vFM&w=300&h=300&q=the%20lord%20of%20the%20rings%20the%20return%20of%20the%20king&ved=2ahUKEwiz1Z6ckZDpAhUK_JQKHe3iD5sQMygBegUIARDeAQ',
      id: 2,
    },
    {
      title: 'Star Wars the rise of skywalker',
      poster:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Flumiere-a.akamaihd.net%2Fv1%2Fimages%2Fstar-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg%3Fregion%3D0%252C0%252C891%252C1372&imgrefurl=https%3A%2F%2Fwww.starwars.com%2Ffilms%2Fstar-wars-episode-ix-the-rise-of-skywalker&tbnid=Igv5Mou-xNSVUM&vet=12ahUKEwidjPPQlZDpAhWQHaYKHeYeDYkQMygAegUIARD2AQ..i&docid=41arnXme_LHM5M&w=891&h=1372&q=star%20wars%20the%20rise%20of%20skywalker&ved=2ahUKEwidjPPQlZDpAhWQHaYKHeYeDYkQMygAegUIARD2AQ',
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
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} poster={movie.poster} />
      ))}
    </>
  );
};

export default App;
