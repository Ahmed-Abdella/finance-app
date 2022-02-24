import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className={styles.container}>
      <h1>
        <Link to="/">finance</Link>
      </h1>
      <nav>
        <ul>
          {!user && (
            <li>
              <Link to="/login">Login</Link>{" "}
            </li>
          )}

          {!user && (
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          )}
          {user && (
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
