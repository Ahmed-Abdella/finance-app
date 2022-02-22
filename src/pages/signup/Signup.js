import { useState } from "react";

import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className={styles["signup-form"]}>
        <label>
          <span>email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </label>
        <label>
          <span>password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </label>

        <label>
          <span>Display name:</span>
          <input
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          ></input>
        </label>
        <button className="btn">Signup</button>
      </form>
    </div>
  );
}
