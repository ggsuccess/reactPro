import React, { useState } from 'react';

const Input = ({ handleChange }) => {
  const [inputTitle, setTitle] = useState('');
  const [inputPicture, setPicture] = useState('');
  return (
    <>
      제목추가
      <input
        type="text"
        onChange={(e) => setTitle((inputTitle = e.target.value))}
      ></input>
      사진추가(사진주소)
      <input
        type="text"
        onChange={(e) => setPicture((inputPicture = e.target.value))}
      ></input>
      <button onClick={() => handleChange()}>추가!</button>
    </>
  );
};

export default Input;
