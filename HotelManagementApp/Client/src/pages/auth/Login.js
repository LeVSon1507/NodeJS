import React from "react";
import "./Login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.status === 200) {
          alert("Login successful")
          localStorage.setItem("userEmail", response.data._doc.email);
          localStorage.setItem("token", response.data.token);
          navigate('/')
         
        }
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
            <h1>Login</h1>
          </div>
          <div className="form-group-rgt">
            <input
              name="email"
              type="text"
              onChange={handleChange}
              className="form-control-rgt"
              id="email"
              value={email}
              placeholder="Your Email"
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
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
