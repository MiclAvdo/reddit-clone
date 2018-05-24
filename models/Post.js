const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./Comment');

let postSchema = new Schema(
  {
    title: String,
    content: String,
    thumbnail_image_url: String,
    votes: Number,
    comments: [Comment],
  },{
    timestamps: true
  });

  module.exports = mongoose.model('Post', postSchema);