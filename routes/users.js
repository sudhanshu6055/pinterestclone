const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pinclone');
const plm = require("passport-local-mongoose")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Post" // Assuming posts are strings, modify as needed
    }
  ],
  dp: {
    type: String, // Assuming dp is a URL or file path, modify as needed
  },
  email: {
    type: String,
    unique: true,
  },
  fullname: {
    type: String,

  },
});

userSchema.plugin(plm)
const User = mongoose.model('User', userSchema);

module.exports = User;
