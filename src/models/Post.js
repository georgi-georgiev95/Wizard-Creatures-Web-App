const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name is required!']
    },
    species: {
        type: String,
        require: [true, 'Species is required!']
    },
    skinColor: {
        type: String,
        require: [true, 'Skin color is required!']
    },
    eyeColor: {
        type: String,
        required: [true, 'Eye color is required!']
    },
    image: {
        type: String,
        required: [true, 'Image URL is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!']
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    votes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;