import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [add, addNote] = useState("");
  const [note, setNote] = useState([]);

  const clickHandler = () => {
    if (!add) {
    } else {
      setNote(note.concat(add));
      addNote("");
    }
  };
  const deleteItem = (id) => {
    const deletes = note.filter((value, ind) => {
      return ind !== id;
    });
    setNote(deletes);
  };
  return (
    <div className="container">
      <h3>TODO LIST</h3>
      <div className="main">
        <input
          type="text"
          value={add}
          onChange={(e) => {
            addNote(e.target.value);
          }}
        />
        <i class="fa-solid fa-plus" onClick={clickHandler}></i>
      </div>
      {note.map((currEle, index) => {
        return (
          <div className="item">
            <p>{currEle}</p>
            <i class="fa-solid fa-trash" onClick={() => deleteItem(index)}></i>
          </div>
        );
      })}
    </div>
  );
};

export default Counter;
