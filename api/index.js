import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.route.js';

const app = express();
dotenv.config();

app.use('/', router);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000!');
    });
  })
  .catch((err) => {
    console.log(err);
  });
