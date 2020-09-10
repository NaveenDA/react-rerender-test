import React, { useState } from "react";

import AnotherPage from "./AnotherApp";

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Click </button>
      <p>Count : {count} </p>
      <AnotherPage />
    </div>
  );
};

export default App;
