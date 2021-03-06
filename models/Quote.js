const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    author: {
        type: String,
        default: 'Anonymous'
    },
    quote: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    visible: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Quote', quoteSchema);