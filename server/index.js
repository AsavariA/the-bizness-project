import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bizRoutes from './routes/biznessRoutes.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv'

dotenv.config();
const app = express();

// Middleware
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/biznesses', bizRoutes);
app.use('/users', userRoutes)

// CONNECTING TO DB
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`)))
  .catch(err => console.log(err));

  mongoose.set('useFindAndModify', false);