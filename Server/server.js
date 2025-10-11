import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import {connectDB} from './config/db.js';
import cors from 'cors';

connectDB();
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin : 'http://localhost:5173',
  methods : ['GET','POST','PUT','DELETE'],
  allowedHeaders : ['Content-Type','Authorization']
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

