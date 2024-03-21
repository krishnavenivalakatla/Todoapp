// import styles from "./Header.module.css";
import styles from "./Footer.module.css";
export default function Footer({ completedtodos, totaltodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.line}>Completed Todos:{completedtodos}</span>{"\u00A0\u00A0\u00A0"}
      
      <span className={styles.line}>Total Todos:{totaltodos}</span>
    </div>
  );
}