import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyOtp() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};
  const [userOtp, setUserOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setUserOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://127.0.0.1:5555/verify_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          otp: userOtp,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "OTP verification failed");
      } else {
        const data = await response.json();
        setSuccessMessage(data.message || "Verification successful!");

        // Save user.id in localStorage or a state
        const userId = data.user.id;
        localStorage.setItem("userId", userId);

        // Navigate based on role
        if (data.user.role === "job_seeker") {
          navigate("/create_jobseeker");
        } else if (data.user.role === "organisation") {
          navigate("/create_organisation");
        } else {
          setErrorMessage("Unknown role. Please contact support.");
        }
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Verify OTP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          OTP:
          <input
            type="text"
            name="otp"
            value={userOtp}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Verify</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default VerifyOtp;
