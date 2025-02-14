const express = require('express');
const router = express.Router();
const { getGalleries, createGallery, upload } = require('./../controllers/galleryController'); 


router.get('/getgalleries', getGalleries);
router.post('/creategalleries', upload.array('files'), createGallery);

module.exports = router;
