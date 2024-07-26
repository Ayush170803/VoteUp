import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [secretAnswer, setSecretAnswer] = useState('');
  const [newPassword, setNewPassword] = useState(''); // Initialize newPassword

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, secretAnswer, newPassword }), // Send newPassword in the request body
      });
      const data = await response.json();
      if (response.ok) {
        alert('Password reset successfully');
        window.location.href = '/login'; // Redirect to login page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during password reset:', error);
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleReset}>
        <h2>Reset Password</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Where were you born?"
          value={secretAnswer}
          onChange={(e) => setSecretAnswer(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} // Update newPassword
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
