import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // <-- your firebase.js config
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/dashboard"); // redirect to members-only page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-page">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Already have an account? <a href="/">Login here</a>
      </p>
    </div>
  );
}

export default Signup;