import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

function Dashboard() {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch profile data from Firestore
  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const ref = doc(db, "users", user.uid); // assumes "users" collection
          const snap = await getDoc(ref);
          if (snap.exists()) {
            setProfile(snap.data());
          } else {
            setProfile(null);
          }
        } catch (err) {
          console.error("Error fetching profile:", err);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProfile();
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div className="dashboard">
      <h1>Members‑Only Dashboard</h1>
      <p>Welcome, <strong>{user.email}</strong> 🎉</p>

      {loading ? (
        <p>Loading profile...</p>
      ) : profile ? (
        <div className="profile">
          <h2>Your Profile</h2>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Membership Level:</strong> {profile.membershipLevel}</p>
          <p><strong>Joined:</strong> {profile.joinDate}</p>
        </div>
      ) : (
        <p>No profile data found. Please complete your account setup.</p>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;