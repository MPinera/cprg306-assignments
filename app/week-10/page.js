"use client";

import React, { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const UserPageProfile = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState(null);
  const [signIn, setSignIn] = useState(false);

  const handleGitHubSignIn = async () => {
    setSignIn(true);
    try {
      await gitHubSignIn();
    } catch (err) {
      setError("Error signing in");
    } finally {
      setSignIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      setError("Error signing out");
    }
  };

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold pb-4">Shopping List App</h1>
      <div className="user-info mb-6">
        {user && (
          <div className="flex items-center gap-4">
            <img
              src={user.photoURL}
              alt={user.displayName}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid #ccc",
              }}
            />
            <div>
              <p className="font-semibold">
                Welcome, {user.displayName || "User"}!
              </p>
              <p>Your email address is: {user.email || "N/A"}</p>
            </div>
          </div>
        )}
      </div>
      <div className="actions mb-6 flex gap-4">
        <button
          className="flex hover:bg-blue-300 bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          onClick={handleGitHubSignIn}
          disabled={signIn}
        >
          {signIn ? "Signing in..." : "Sign In"}
        </button>
        <button
          className="flex hover:bg-red-300 bg-red-500 text-white font-semibold py-2 px-4 rounded"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
      <div className="navigation">
        <Link
          className="font-semibold text-black hover:underline"
          href="week-10/shopping-list"
        >
          To Shopping List
        </Link>
      </div>
    </div>
  );
};

export default UserPageProfile;
