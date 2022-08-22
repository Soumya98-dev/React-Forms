import React from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinNewsletter: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords donot match");
      return;
    }
    if (formData.joinNewsletter === true) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type == "checkbox" ? checked : value,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email address"
        name="email"
        value={formData.email}
        onChange={handleChange}
      ></input>
      <br></br>
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      ></input>
      <br></br>
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      ></input>
      <br></br>
      <input
        type="checkbox"
        name="joinNewsletter"
        id="joinNewsLetter"
        checked={formData.joinNewsletter}
        onChange={handleChange}
      ></input>
      <label htmlFor="joinNewsLetter">I want to join the newsletter</label>
      <br></br>
      <button>Sign up</button>
    </form>
  );
}

export default App;
