import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// Loading environment variable(s) from the .env file
dotenv.config();

// Import the create brand route
import createBrandsRoute from './routes/createBrands.js';

const app = express()
const port = 3000
app.use(express.json());

// MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('MONGO_URI is not defined in environment variables!');
  // Exit the process with a non-zero status code (failure)
  // If the MongoDB connection fails, stop the app with an error code (1)
  // This indicates the process ended with a failure, not a normal exit.
  process.exit(1);
}

const connection = process.env.ConnStr;

// connect to my Database => Atlas Cloud Computing
// use "Connection String"

async function main() {
  try {
    // Using the mongoose.connect() method to connect to MongoDB with the URI
    await mongoose.connect(mongoURI, {

      /* 
      NOTE TO REVIEW:
      - Since Mongoose 6, these options are no longer necessary:
      - These options are just for backward compatibility (Mongoose 5 and below)
      - Yes, we can ignore them :-)
      */
    });

    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB connection error:', err); 
    process.exit(1); // Exit because DB connection failed before server start
  }
}

// Call the function to connect to the database
main();

app.use('/api/Brands', createBrandsRoute);

app.get('/', (req, res) => {
  res.send('MongoDB, Express, and Node.js are working!');
});

// Or adding the full structure with error handling:
app.listen(port, () => {
  console.log(`Application URL: http://localhost:${port}`);
}).on('error', (err) => {
  console.error('Server loading error:', err);
  process.exit(1); // Exit with code "1" for errors for any issue
});