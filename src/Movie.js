import React from 'react';
import './Movie.css';

const Movie = (props) => {
  const { title, poster } = props;
  const style = {
    border: '1px solid #333',
  };
  return (
    <>
      <table style={style}>
        <tr>
          <td>{title}</td>
          <td>
            <img src={poster} width={200} height={200} alt="영화포스터" />
          </td>
        </tr>
      </table>
    </>
  );
};

export default Movie;
