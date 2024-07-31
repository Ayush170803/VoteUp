const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');
const formModel = require('./models/form_model');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

const formDBConnection = mongoose.createConnection(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

formDBConnection.on('connected', () => {
  console.log('Connected to form database successfully!');
});

formDBConnection.on('error', (error) => {
  console.log('Connection to form database failed:', error);
});

const Form = formDBConnection.model('Form', formModel.schema);

app.use(cors({
  origin: 'http://localhost:1234',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/form", async (req, res) => {
  console.log("Received POST request to /form with body:", req.body);
  try {
    const formData = new Form(req.body);
    console.log("Saving data to MongoDB:", formData);
    await formData.save();
    res.status(201).send(formData);
    console.log("Data saved successfully:", formData);
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
