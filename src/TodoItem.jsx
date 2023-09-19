export function TodoItem({completed,id,title,toggleTodo,deleteTodo}) {
  return (
    <li className="items">
      <label id="label-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          id="Checkbox"
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
