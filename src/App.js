import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./firebaseConfig";

// === Homepage with Login ===
function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // redirect after login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Membership Site Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Not a member? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

// === Dashboard (Protected) ===
function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome to the Members‑Only Dashboard!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

// === Signup Page (Optional) ===
function Signup() {
  return (
    <div>
      <h2>Signup Page Placeholder</h2>
      <p>Implement Firebase createUserWithEmailAndPassword here.</p>
    </div>
  );
}

// === Private Route Wrapper ===
function PrivateRoute({ children }) {
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to="/" />;
}

// === Main App ===
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcb8B7haUpk2pKmtQQ2LggJ-ePYqDuxEg",
  authDomain: "portfolio-83f93.firebaseapp.com",
  projectId: "portfolio-83f93",
  storageBucket: "portfolio-83f93.firebasestorage.app",
  messagingSenderId: "221577186678",
  appId: "1:221577186678:web:3d17fd7a5cc43e011f3e57",
  measurementId: "G-PCB4ZJV58D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

<Route path="/signup" element={<Signup />} />
<Route path="/reset" element={<PasswordReset />} />
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
<Route
  path="/edit-profile"
  element={
    <PrivateRoute>
      <ProfileEdit />
    </PrivateRoute>
  }
/>
