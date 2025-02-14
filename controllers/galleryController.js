const asyncHandler = require('express-async-handler');
const Gallery = require('../models/Gallery');  
const multer = require('multer');

 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  
  }
});
const upload = multer({ storage });

 
const getGalleries = asyncHandler(async (req, res) => {
  const galleries = await Gallery.find();  
  res.status(200).json(galleries);  
});

 
const createGallery = asyncHandler(async (req, res) => {
  const newGallery = new Gallery({
    images: req.files.map(file => file.filename),  
    createdAt: new Date(),
  });

  await newGallery.save();
  res.status(201).json({ message: 'Gallery created successfully' });  
});

 
module.exports = {
  getGalleries,
  createGallery,
  upload,  
};
