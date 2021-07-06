import React, { useEffect, useState } from "react";
// You will be able to use this, when you paste your firestore configs inside the firebaseConfig.js file
import db from "../firebaseConfig";

const Home = () => {
  const [inputForm, setinputForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  function handelInput(event) {
    setinputForm({ ...inputForm, [event.target.name]: event.target.value });
  }
  function sendData(event) {
    event.preventDefault();
    db.collection("users").add(inputForm);
    setinputForm({
      username: "",
      password: "",
      email: "",
    });
  }

  return (
    <div class="container">
      <form onSubmit={sendData}>
        <div class="form-group">
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={handelInput}
            value={inputForm.username}
            placeholder="username"
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handelInput}
            value={inputForm.password}
            placeholder="password"
          />
        </div>

        <div class="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handelInput}
            value={inputForm.email}
            placeholder="email"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
