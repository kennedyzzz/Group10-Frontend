import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">SIGN IN</button>
        <div className="extra-links">
          <a href="#">Forgot your password?</a>
          <Link to="/signup">Create an account</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
