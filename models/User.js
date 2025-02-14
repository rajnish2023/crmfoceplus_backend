const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: 'https://res.cloudinary.com/dxkufsejm/image/upload/v1628588944/default-profile-pic.jpg' },
    aboutus: { type: String, default: 'Hey there' },
    linkedin: { type: String, default: '' },
    status: { type: String, enum: ['Pending', 'Active'], default: 'Pending' },
    role: { type: String, enum: ['superAdmin', 'admin', 'user','seo-expert'], default: 'user' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
