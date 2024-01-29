const Post = require('../models/Post');

exports.create = (postData) => Post.create(postData); 

exports.getAll = () => Post.find();

exports.getOne = (id) => Post.findById(id).populate('owner');