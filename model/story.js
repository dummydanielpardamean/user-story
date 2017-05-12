let bcrypt = require('bcrypt-nodejs');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StorySchema = new Schema({
    _creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    story: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

let Story = module.exports = mongoose.model('Story', StorySchema);

Story.all = callback => {
    Story.find(callback).populate({
        path: '_creator'
    });
};
