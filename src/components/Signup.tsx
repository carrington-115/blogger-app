"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState<string>("");
  const [firstPassword, setFirstPassword] = useState<string>("");
  const [secondPassword, setSecondPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmitForm = async (username: string, password: string) => {
    try {
      const acccountCreationRequest = await axios.post(
        process.env.SERVER_PORT_SIGNUP || "http://localhost:5000/auth/signup",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(acccountCreationRequest);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (firstPassword === secondPassword) {
      setPassword(firstPassword);
    }
  }, [firstPassword, secondPassword]);

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
        <label className="text-lg mb-1" htmlFor="first-password">
          Password
        </label>
        <input
          className="w-full px-4 py-2 mb-5 rounded-md bg-transparent border border-white text-white"
          type="password"
          placeholder="Password"
          value={firstPassword}
          name="first-password"
          onChange={(e) => setFirstPassword(e.target.value)}
        />
        <label className="text-lg mb-1" htmlFor="second-password">
          Retype password
        </label>
        <input
          className="w-full px-4 py-2 mb-5 rounded-md bg-transparent border border-white text-white"
          type="password"
          placeholder="Retype password"
          value={secondPassword}
          name="second-password"
          onChange={(e) => setSecondPassword(e.target.value)}
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

export default Signup;
