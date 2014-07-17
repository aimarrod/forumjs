'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThreadSchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('Thread', ThreadSchema);
