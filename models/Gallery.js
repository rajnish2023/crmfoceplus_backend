const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    images: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Gallery', gallerySchema);
