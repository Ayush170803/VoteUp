const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const register = async (req, res) => {
    const {name, email, phone, password, age, aadhar, secretAnswer } = req.body;
    console.log('Request Body:', req.body); // Log the request body to check what is being received
    
    try {
        const existingUser = await User.findOne({ $or: [{ email }, { phone }, {aadhar}] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email or phone number or aadhar number already exists' });
        }

        if (!secretAnswer) {
            return res.status(400).json({ message: 'Secret answer is required' });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const secretHash = await bcrypt.hash(secretAnswer, salt);

        const newUser = new User({
            name,
            email,
            phone,
            password: hash,
            age,
            aadhar,
            secretAnswer: secretHash
        });

        const createdUser = await newUser.save();

        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.cookie("token", token);
        res.status(201).json({ message: "User registered successfully", user: createdUser });
    } catch (error) {
        console.error('Registration Error:', error.message); // Log the exact error message
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};




const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
        res.cookie("token", token);
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};

const logout = (req, res) => {
    res.cookie("token", "", { maxAge: 1 });
    res.status(200).json({ message: "Logout successful" });
};
const resetPassword = async (req, res) => {
    const { email, secretAnswer, newPassword } = req.body;
  
    if (!email || !secretAnswer || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      console.log('Secret answer provided:', secretAnswer);
      console.log('Hashed secret answer stored in database:', user.secretAnswer);
  
      // Verify the secret answer
      const isMatch = await bcrypt.compare(secretAnswer, user.secretAnswer);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid secret answer" });
      }
  
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
  
      // Update the user's password
      user.password = hashedPassword;
      await user.save();
  
      res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
      console.error('Error resetting password:', error.message);
      res.status(500).json({ message: "Error resetting password", error: error.message });
    }
  };

module.exports = { register, login, logout, resetPassword };
