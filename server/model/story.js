import mongoose from "mongoose";

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
    Story.find(callback).sort({createdAt: -1}).populate({
        path: '_creator'
    });
};

Story.update = (conditions, update, options, callback) => {
    Story.findOneAndUpdate(conditions, update, options, callback);
};

Story.delete = (id, callback)=>{
    Story.findByIdAndRemove(id, callback);
}

export default Story;
