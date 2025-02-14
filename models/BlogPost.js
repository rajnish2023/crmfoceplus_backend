const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    banner: { type: String },
    content: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogCategory', required: true },
    metaTitle: { type: String },
    metaDescription: { type: String },
    metakeywords: { type: String },
    metaimage: { type: String },
    status: { type: String, enum: ['Draft', 'Published'], default: 'Draft' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BlogPost', blogPostSchema);
