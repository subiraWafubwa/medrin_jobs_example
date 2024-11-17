import React, { useEffect } from "react";

export default function CreateJobseeker() {
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log("User ID:", userId);
  }, []);

  return (
    <>
      <p>Create Jobseeker</p>
    </>
  );
}
