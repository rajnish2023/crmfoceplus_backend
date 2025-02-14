 
const asyncHandler = require('express-async-handler');
const BlogCategory = require('../models/BlogCategory');

 
exports.createCategory = asyncHandler(async (req, res) => {
  const { title, slug, status } = req.body;

  
  const existingCategory = await BlogCategory.findOne({ $or: [{ title }, { slug }] });
  if (existingCategory) {
    res.status(400).json({ message: 'Category with this name or slug already exists.' });
    return;
  }

  const newCategory = new BlogCategory({
    title,
    slug,
    status
  });

  await newCategory.save();
  res.status(201).json({ message: 'Category created successfully', category: newCategory });
});

 
exports.getAllCategories = asyncHandler(async (req, res) => {
  const categories = await BlogCategory.find();
  res.status(200).json(categories);
});

 
exports.getCategoryBySlug = asyncHandler(async (req, res) => {
  const category = await BlogCategory.findOne({ slug: req.params.slug });
  if (!category) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }
  res.status(200).json(category);
});

 
exports.updateCategory = asyncHandler(async (req, res) => {
  const { name, slug, status } = req.body;

  const category = await BlogCategory.findOneAndUpdate(
    { slug: req.params.slug },
    { name, slug, status },
    { new: true }
  );

  if (!category) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }

  res.status(200).json({ message: 'Category updated successfully', category });
});

 //update category by id
exports.updateCategory = asyncHandler(async (req, res) => {
  const category = await BlogCategory.findByIdAndUpdate(
    req.params.Id,
    req.body,
    { new: true }
  );
    if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
    }
    res.status(200).json({ message: 'Category updated successfully', category });
}
);
 

// Delete a category by id
exports.deleteCategory = asyncHandler(async (req, res) => {
  const category = await BlogCategory.findByIdAndDelete(req.params.Id);
    if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
    }
    res.status(200).json({ message: 'Category deleted successfully' });
});