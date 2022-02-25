import React, { ChangeEvent, FormEvent, useState } from "react";
import "./sign-in.styles.scss";

type FormData = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { email, password } = e.target as typeof e.target & FormData;
    setEmail(email.value);
    setPassword(password.value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} required onChange={handleChange} />
        <label>Email</label>
        <input
          type="password"
          value={password}
          required
          onChange={handleChange}
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
