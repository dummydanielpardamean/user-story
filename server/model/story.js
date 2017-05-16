import mongoose from 'mongoose';

const {Schema} = mongoose;

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

const Story = mongoose.model('Story', StorySchema);

Story.all = callback => {
    Story.find(callback).populate({
        path: '_creator'
    });
};

export default Story;
