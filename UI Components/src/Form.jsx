import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }
    setLoading(true);

    //fake login
    setTimeout(() => {
      setLoading(false);
      alert("Logged in!");
    }, 1000);
  };

  return (
    <form
      className="max-w-md mt-10 p-3 border rounded-xl mx-auto flex flex-col justify-center"
      onSubmit={handleSubmit}
      aria-label="Login Form"
    >
      <div className="p-2 flex flex-col justify-between">
        <label htmlFor="username" className="m-1">
          Username:
        </label>
        <input
          className="border rounded h-10 p-3 bg-white"
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="p-2 flex flex-col justify-between">
        <label htmlFor="password" className="m-1">
          Password:
        </label>
        <div className="relative flex items-center">
          <input
            className="border rounded h-10 p-3 bg-white w-full"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-2 top-2 mt-1 mr-2"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
            {showPassword ? (
              <FaEye color="grey" />
            ) : (
              <FaEyeSlash color="grey" />
            )}
          </button>
        </div>
      </div>
      {error && (
        <div className="text-red-600 text-sm mx-3" role="alert">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="border rounded p-3 my-6 mx-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default Form;
