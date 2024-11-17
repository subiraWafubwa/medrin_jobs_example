// Organisation.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Organisation({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a POST request to logout
      const response = await fetch("http://127.0.0.1:5555/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Failed to logout.");
        return;
      }

      // Clear the auth token from localStorage
      localStorage.removeItem("authToken");

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      alert("An error occurred while logging out. Please try again.");
    }
  };

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <p>Role: {user.role}</p>
      <p>More Organisation-specific content goes here.</p>

      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
