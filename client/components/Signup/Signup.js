import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aadhar: '',
    password: '',
    secretAnswer: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // const newErrors = validateForm();
    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    // } else {
    //   setErrors({});
      try {
        const response = await axios.post('http://localhost:3000/api/auth/register', formData, {
          withCredentials: true, // to send cookies
        });
        console.log('Response:', response.data);
        setSuccessMessage('Signup successful! Redirecting to login...');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000); // Redirect after 2 seconds
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        setErrors({ general: 'Signup failed. Please try again.' });
      }
    // }
  };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (formData.password !== formData.confirmPassword) {
  //     newErrors.confirmPassword = 'Passwords do not match';
  //   }
  //   // Add more validations as needed
  //   return newErrors;
  // };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="aadhar"
          placeholder="Aadhar No"
          value={formData.aadhar}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        /> */}
        <input
          type="text"
          name="secretAnswer"
          placeholder="Your BirthPlace?"
          value={formData.secretAnswer}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
        {errors.general && (
          <div className="error">{errors.general}</div>
        )}
        {successMessage && (
          <div className="success">{successMessage}</div>
        )}
        <button type="submit">Sign Up</button>
        <div className="login-option">
          <p>Already have an account?</p>
          <Link to="/login" className="login-link">Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
