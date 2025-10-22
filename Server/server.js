import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import {connectDB} from './config/db.js';
import cors from 'cors';

dotenv.config();
connectDB();
const app = express();


const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin : ['https://portfolio-9913.onrender.com', 'http://localhost:5173'],
  methods : ['GET','POST','PUT','DELETE'],
  allowedHeaders : ['Content-Type','Authorization'],
  credentials: true
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

