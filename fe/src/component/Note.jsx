import React, { useEffect, useState } from "react";

export const Note = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ill-gray-bull-sock.cyclic.app/notes", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("loginToken")}`,
        // to see only that particular user Note is being managed from Backend
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Created Notes</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {data?.map((ele) => {
          return (
            <div
              style={{
                width: "250px",
                border: "1px solid black",
              }}
              key={ele._id}
            >
              <h2>Title:{ele.title}</h2>
              <h2>Description:{ele.description}</h2>
              <h2>Category:{ele.category}</h2>
              <button>Update</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
