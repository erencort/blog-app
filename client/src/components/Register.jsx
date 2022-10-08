import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/register", data);
    setData({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
