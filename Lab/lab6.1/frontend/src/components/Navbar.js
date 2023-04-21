import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <a onClick={() => navigate("/")}>User List</a>|
      <a onClick={() => navigate("/users")}>Users</a>
    </div>
  );
}

export default Navbar;
