import React from "react";
import "./Register.css";
import axios from "axios";
function Register() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "userName") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          userName: userName,
          password: password,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-rgt">
        <form onSubmit={handleSubmit} className="form-rgt">
          <div className="title-rgt">
            <h1>Sign Up</h1>
          </div>
          <div className="form-group-rgt">
            <input
              name="userName"
              type="text"
              onChange={handleChange}
              className="form-control-rgt"
              id="name"
              value={userName}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group-rgt">
            <input
              name="password"
              onChange={handleChange}
              type="password"
              className="form-control-rgt"
              id="password"
              value={password}
              placeholder="Password"
            />
          </div>
          <div className="form-group-rgt">
            <button type="submit" className="btn-rgt">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
