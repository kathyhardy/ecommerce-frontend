import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function ProfileEdit() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [membershipLevel, setMembershipLevel] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Load existing profile data
  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setName(data.name || "");
          setMembershipLevel(data.membershipLevel || "");
          setJoinDate(data.joinDate || "");
        }
      }
    };
    fetchProfile();
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      const ref = doc(db, "users", user.uid);
      await setDoc(ref, {
        name,
        membershipLevel,
        joinDate
      });
      setMessage("Profile updated successfully!");
      setTimeout(() => navigate("/dashboard"), 2000); // redirect after save
    } catch (err) {
      setMessage("Error updating profile: " + err.message);
    }
  };

  if (!user) {
    return <p>You must be logged in to edit your profile.</p>;
  }

  return (
    <div className="profile-edit">
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Membership Level"
          value={membershipLevel}
          onChange={(e) => setMembershipLevel(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Join Date (YYYY-MM-DD)"
          value={joinDate}
          onChange={(e) => setJoinDate(e.target.value)}
        />
        <br />
        <button type="submit">Save Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ProfileEdit;