import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file
import { Navigate } from "react-router-dom";

function LoginForm() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const { login } = useAuth || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Logged in:', email, password);

    //login(email, password);

    setEmail("");
    setPassword("");
    setLoggedIn(true);
  };

  if(loggedIn){
    return <Navigate to="/home" />
  }

  return (
    <div className="form-container" >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onSubmit={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
