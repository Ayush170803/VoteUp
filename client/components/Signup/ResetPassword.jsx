import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, securityAnswer, newPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Password reset successfully');
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
          value={securityAnswer}
          onChange={(e) => setSecurityAnswer(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
