const mongoose = require('mongoose');

const blogCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
},
{ timestamps: true }
);

module.exports = mongoose.model('BlogCategory', blogCategorySchema);
