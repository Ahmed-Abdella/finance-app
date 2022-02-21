import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <h1>
        <Link to="/">finance</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>{" "}
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
