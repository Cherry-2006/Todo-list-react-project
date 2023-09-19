import { useState } from "react";

export function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    props.onSubmit(newItem);
    setNewItem("");
  }
  return (
    <form className="new-item-form" onSubmit={handleSubmit} autoComplete="off">
      <div className="form-row">
        <label htmlFor="item" className="new-item">
         ADD NEW ITEM
        </label>
      </div>
      <input
        type="text"
        id="item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="btn" id="add">ADD</button>
    </form>
  );
}
