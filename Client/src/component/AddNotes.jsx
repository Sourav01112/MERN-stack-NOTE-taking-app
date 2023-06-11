import React, { useState } from "react";

export const AddNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title,
      description,
      category,
    };
    
    // console.log(payload);
    fetch("https://ill-gray-bull-sock.cyclic.app/notes/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("loginToken")}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <div>
      <h3>Add a new note</h3>
      <label htmlFor="title">Note Title</label> <br />
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="description">Description</label> <br />
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="category">Category</label> <br />
      <input
        type="text"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleSubmit}>Create</button> <br />
    </div>
  );
};
