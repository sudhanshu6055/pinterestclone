const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  image :{
    type : String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  likes: {
    type: Array,
    default: [],
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
