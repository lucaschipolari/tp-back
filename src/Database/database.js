import mongoose from 'mongoose';

const { MONGODB } = process.env;

export const connectDB = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(MONGODB)
    .then(() => {
      console.log('Connected to Mongo');
    })
    .catch(() => {
      console.log('Failed to connect to Mongo');
    });
};
