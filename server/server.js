

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware,requireAuth  } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express();

await connectCloudinary();

app.use(cors());
app.use(express.json()); 
app.use(clerkMiddleware()); 
 
app.get('/', (req, res) => res.send('Server is Live!'));

// new add only check for second versal

app.get('/env-test', (req, res) => {
  res.json({
    gemini: !!process.env.GEMINI_API_KEY,
    clerk: !!process.env.CLERK_SECRET_KEY,
    db: !!process.env.DATABASE_URL,
    clipdrop: !!process.env.CLIPDROP_API_KEY,
    cloudinary: !!process.env.CLOUDINARY_CLOUD_NAME
  });
});
/////////////////////////////


// app.use(requireAuth())  




app.use('/api/ai', aiRouter); 
app.use('/api/user', userRouter); 

// app.use('/api/ai', requireAuth(), aiRouter)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});













