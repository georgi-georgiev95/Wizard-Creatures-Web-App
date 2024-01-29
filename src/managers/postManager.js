const Post = require('../models/Post');

exports.create = (postData) => Post.create(postData); 

exports.getAll = () => Post.find();

exports.getOne = (id) => Post.findById(id).populate('owner').populate('votes');

exports.vote = (id, userId) => Post.findByIdAndUpdate(id, { $push: { votes: userId } });

exports.getOneAndUpdate = (id, postData) => Post.findByIdAndUpdate(id, postData);

exports.getOneAndDelete = (id) => Post.findByIdAndDelete(id);

exports.getUserPosts = (userId) => Post.find({ owner: userId });