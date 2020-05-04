import React from 'react';

const Input = ({ value }) => {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      제목추가<input type="text" onChange={onChange}></input>
      사진추가(사진주소)<input type="text" onChange={onChange}></input>
      <button >추가!</button>
    </>
  );
};

export default Input;
