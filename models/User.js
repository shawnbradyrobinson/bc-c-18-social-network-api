/***
 * 
 * Let's try this with thought.js as a subdocument of User...if that doesn't work, we can always go back and make Thought it's own parent file 
 * 
 */

const {Schema, Types, model} = require('mongoose');



const thoughtSchema = new Schema({
    content: {type: String},
    reaction: {type: String},
});

const userSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, 
        default: () => new mongoose.Types.ObjectId(),
    },
    name: {type: String, required: true},
    thoughts: [thoughtSchema],
    lastAccessed: {type: Date, default: Date.now},
});

const User = model('User', userSchema); 

const thoughtData = [
{
    content: "Frank Ocean Frank Ocean Frank Ocean Frank Ocean Frank Ocean Frank Ocean Frank Ocean Frank Ocean",
    reaction: "Liked"
},
{
    content: "Kendrick Lamar Kendrick LamarKendrick LamarKendrick LamarKendrick LamarKendrick Lamar"
},
{
    content: "Hippo Campus Hippo Campus Hippo Campus Hippo Campus Hippo Campus Hippo Campus Hippo Campus"
},
{
    content: "Jazz JazzJazzJazzJazzJazzJazzJazzJazzJazzJazzJazz",
    reaction: "disliked",
},
]

User.create({name: "Shawn", thoughts: thoughtData}).then(data => console.log(data)).catch(err => console.error(err));

module.exports = User; 