import React, { useEffect, useState } from "react";

function Newpra() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("current value of count: ", count);
  }, [count]);
  return (
    <div>
      <h1 className="font-bold text-center justify-center m-3 text-3xl">Count value: {count}</h1>
      <div className="flex flex-row text-center justify-center gap-4">
        <button className="border rounded p-2 bg-amber-300" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="border rounded p-2 bg-amber-300" onClick={() => count > 0 && setCount(count - 1)}>
          Decrease
        </button>
        <button className="border rounded p-2 bg-amber-300" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Newpra;
