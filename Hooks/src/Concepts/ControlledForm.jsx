import React from "react";
import { useState } from "react";
import './login.css'

const ControlledForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <form action="">
        <div className="email">
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <input
            type="text"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            placeholder="Password"
          />
        </div>
      </form>
    </div>
  );
};

export default ControlledForm;
