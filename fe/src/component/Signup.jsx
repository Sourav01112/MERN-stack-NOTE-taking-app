import React, { useState } from "react";
export const Signup = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    // console.log(payload);
    fetch(`https://ill-gray-bull-sock.cyclic.app/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h3>Registration</h3>
      <label htmlFor="username">Username</label> <br />
      <input
        type="text"
        name="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="email">Email</label> <br />
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="password">Password</label> <br />
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleSubmit}>Sign Up</button> <br />
    </div>
  );
};
