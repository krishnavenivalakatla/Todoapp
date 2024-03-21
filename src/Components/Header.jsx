import styles from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <h1 className={styles.header}>Todo List</h1>
    </div>
  );
}