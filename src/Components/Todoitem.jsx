import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handledelete(item) {
    console.log("delete is clicked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleclick(name) {
    console.log("item is clicked", name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleclick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handledelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}