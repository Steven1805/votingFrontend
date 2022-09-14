import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export function Signup() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [];

  const errors = {
    uname: "invalid username"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { fname, lname, email, uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    /* Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }*/
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="input-container">
          <label>First name </label>
          <input type="text" name="fname" required />
        </div>
        <div className="input-container">
          <label>Last name </label>
          <input type="text" name="lname" required />
        </div>
        <div className="input-container">
          <label>E-mail </label>
          <input type="text" name="email" required />
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        <p>Already registered? <a className="form-link" href="ling">Sign in</a>!</p>
      </div>
    </div>
  );
}