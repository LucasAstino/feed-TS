import styles from "./Header.module.css";
import ignitLogo from "../Assets/Ignite-simbol.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ignitLogo} alt="logo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
