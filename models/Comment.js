const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema(
  {
    content: String,
    votes: Number,
  },{
    timestamps: true
  });

module.exports = commentSchema;
