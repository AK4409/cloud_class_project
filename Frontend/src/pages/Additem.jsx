import React, { useState } from "react";

function Additem() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      {/* <textarea name="text" id="text">Products added: {quantity}</textarea> */}
      <h1 className="font-bold flex items-center justify-center">
        Product added: {quantity}
      </h1>
      <div className="flex flex-row items-center justify-center">
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="m-3 border-0 border-amber-300 bg-amber-400 p-2 rounded"
        >
          Add Products
        </button>
        <button
          onClick={() => quantity > 0 && setQuantity(quantity - 1)}
          className="m-3 border-0 border-amber-300 bg-amber-400 p-2 rounded"
        >
          Remove Products
        </button>
        <button
          onClick={() => setQuantity(0)}
          className="m-3 border-0 border-amber-300 bg-amber-400 p-2 rounded"
        >
          Remove all
        </button>
      </div>
    </div>
  );
}

export default Additem;
