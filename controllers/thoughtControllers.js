const {ObjectId} = require('mongoose').Types; 

const Thought = require('../models/Thought');

const totalThoughtCount = async () => {
    const numberOfThoughts = await Thought.aggregate().count('thoughtCount');
    return numberOfThoughts; 
}

module.exports = {
    async getThoughts(req, res){
        try {
            const thoughts = await Thought.find();

            const thoughtObj = {
                thoughts, 
                totalCount: await totalThoughtCount(),
            };
            res.json(thoughtObj);

        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getSingleThought(req, res){
        try {
            const thought = await Thought.findOne({thoughtId: req.params.thoughtId}).select('-__v');

            if (!thought) {
                return res.status(404).json({message: 'No thought with that ID'})
            }

            res.json(user);
        } catch (err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async createThought(req, res){
        try{
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res){
        try {
            const thought = await Thought.findOneAndRemove({thoughtId: req.params.thoughtId});

            if (!thought){
                return res.status(404).json({message: 'No thought here'});
            }
            res.json({message: 'Thought successfully deleted'});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

}

