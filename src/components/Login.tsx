"use client";
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmitForm = async (username: string, password: string) => {
    try {
      const loginRequest = await axios.post(
        process.env.SERVER_PORT_LOGIN || "http://localhost:5000/auth/login",
        { username: username, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUsername("");
      setPassword("");
      console.log(loginRequest);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        method="post"
        className="flex flex-col p-8 bg-gray-900 w-2/6 rounded-md border"
      >
        <label className="text-lg mb-1" htmlFor="username">
          Username
        </label>
        <input
          className="w-full px-4 py-2 mb-5 rounded-md bg-transparent border border-white text-white"
          type="email"
          placeholder="Email"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-lg mb-1" htmlFor="password">
          Password
        </label>
        <input
          className="w-full px-4 py-2 mb-5 rounded-md bg-transparent border border-white text-white"
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 bg-white px-4 py-2 rounded-md text-black"
          onClick={() => handleSubmitForm(username, password)}
        >
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
