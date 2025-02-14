// routes/blogCategoryRoutes.js
const express = require('express');
const router = express.Router();
const BlogCategoryController = require('./../controllers/blogCategoryController');

// Route to create a new blog category
router.post('/createcategory', BlogCategoryController.createCategory);

// Route to get all categories
router.get('/getcategories', BlogCategoryController.getAllCategories);

// Route to get a single category by slug
router.get('/:slug', BlogCategoryController.getCategoryBySlug);

// Route to update a category by slug
router.patch('/updateCategory/:Id', BlogCategoryController.updateCategory);

// Route to delete a category by slug
router.delete('/deletecategory/:Id', BlogCategoryController.deleteCategory);

module.exports = router;
