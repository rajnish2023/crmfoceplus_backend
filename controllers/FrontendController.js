const Blog = require('../models/BlogPost');

// Fetch all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch blogs by category
exports.getBlogsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const blogs = await Blog.find({ category });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch blogs by author
exports.getBlogsByAuthor = async (req, res) => {
    const { author } = req.params;
    try {
        const blogs = await Blog.find({ author });
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

