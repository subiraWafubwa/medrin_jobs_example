import React, { useEffect } from "react";

export default function CreateOrganisation() {
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log("User ID:", userId);
  }, []);

  return (
    <>
      <p>Create Organisation</p>
    </>
  );
}
