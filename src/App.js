import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <p>current count:{value}</p>
      <button onClick={() => setValue(value + 1)}>click!up</button>
      <button onClick={() => setValue(value - 1)}>click!down</button>
    </>
  );
};

export default App;
