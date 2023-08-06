/***
 * 
 * Let's try this with thought.js as a subdocument of User...if that doesn't work, we can always go back and make Thought it's own parent file 
 * 
 */

const {Schema, Types, model} = require('mongoose');

// const thoughtSchema = require('./Thought');

const userSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, 
        default: () => new Types.ObjectId(),
    },
    name: {type: String, required: true},
    thoughts: [],
    lastAccessed: {type: Date, default: Date.now},
});

const User = model('User', userSchema); 



module.exports = User; 