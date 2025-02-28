const mongoose = require('mongoose');

const blogCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  categoryimg: { type: String},
  slug: { type: String, required: true, unique: true },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
},
{ timestamps: true }
);

module.exports = mongoose.model('BlogCategory', blogCategorySchema);
