// Create a login form with a password input. Use useState to toggle the password between Show Password and Hide Password.
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(0);
  return (
    <div>
      <form action="" method="post">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="border-2 m-2 p-1 rounded"
        />
        <div className="">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border-2 p-1 rounded w-50 m-2 relative"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-40 right-206 cursor-pointer"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
