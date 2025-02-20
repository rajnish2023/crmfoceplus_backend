const Blog = require('../models/BlogPost');
const BlogCategory = require('../models/BlogCategory'); 
const User = require('../models/User');

// Fetch all blogs with status published and populate author and category 

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ status: 'Published' }).populate('author').populate('category');
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

 

// Fetch blog by slug
exports.getBlogBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
        const blog = await Blog.findOne({ slug });
        res.status(200).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// fetch categories list if status is active  

exports.getCategories = async (req, res) => {
    try {
        const categories = await BlogCategory.find({ status: 'Active' });
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//find blogs by category first find the category by slug and then populate the blogs 

exports.getBlogByCategorySlug = async (req, res) => {
    const { category } = req.params;
    try {
        const blogCategory = await BlogCategory.findOne({ slug: category });
        const blogs = await Blog.find({ category: blogCategory._id });
        res.status(200).json(blogs);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//fetch bloglist by author name  first find the author by name and then populate the blogs  with status published 


exports.getBlogsByAuthor = async (req, res) => {
    const { author } = req.params;
    try {
        const user = await User.findOne({ name: author });
        const blogs = await Blog.find({ author: user._id, status: 'Published' });
        res.status(200).json(blogs);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//fetch authors list if status is active 

exports.getAuthors = async (req, res) => {
    try {
        const authors = await User.find({ status: 'Active' });
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 

 

