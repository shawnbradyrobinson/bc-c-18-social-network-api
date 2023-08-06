const {Schema, Types, model} = require('mongoose');


const thoughtSchema = new Schema({
    thoughtId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    content: {type: String},
    reaction: {type: String},
});

const Thought = model('Thought', thoughtSchema)
module.exports = Thought; 