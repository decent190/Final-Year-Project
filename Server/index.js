const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.routes');

dotenv.config();
const app = express();

const port = process.env.PORT || 5000; 

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/api/auth', userRouter); // Ensure this is correct

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});