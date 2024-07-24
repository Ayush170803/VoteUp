import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleLogin}>
        <h2>Log In</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
        <p>
          Forgot your password? <Link to="/reset-password">Reset it</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
