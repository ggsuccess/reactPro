import React, { useState } from 'react';

const Input = () => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      제목추가<input type="text" onChange={onChange}></input>
      사진추가(사진주소)<input type="text"></input>
      <button onClick={}>추가!</button>
    </>
  );
};

export default Input;
