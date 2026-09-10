import React from "react";

function Conditional() {
  const isLoggedIn = true;
  return (
    <div>
      <div>
        {
          isLoggedIn && <h1>You can access data</h1> //Conditional rendering.
        }
      </div>
    </div>
  );
}

export default Conditional;
