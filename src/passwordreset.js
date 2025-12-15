import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase"; // <-- your firebase.js config
import { useNavigate } from "react-router-dom";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
      // Optionally redirect back to login after a delay
      setTimeout(() => navigate("/"), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="reset-page">
      <h1>Reset Your Password</h1>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your account email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Send Reset Email</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Remembered your password? <a href="/">Login here</a>
      </p>
    </div>
  );
}

export default PasswordReset;