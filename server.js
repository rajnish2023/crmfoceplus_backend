const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const galleryRoutes = require('./routes/galleryRoutes')
const blogCategoryRoutes = require('./routes/blogCategoryRoutes');
const blogPostRoutes = require('./routes/blogPostRoutes');
const userAuthRoutes = require('./routes/userAuthRoute');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));


// Routes
app.use('/api', galleryRoutes);
app.use('/api', blogCategoryRoutes);
app.use('/api/blog', blogPostRoutes);
app.use('/api/auth', userAuthRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
