const mongoose = require('mongoose');

const connection = require('../config/connection');

const {User, Thought} = require('../models');

// const { getRandomUsers, getRandomThoughts} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    const users = [
        {
            name: "Shawn",
        },
        {
            name: "Doug",
        },
        {
            name: "Tyler",
        },
        {
            name: "Connor",
        },
        {
            name: "Lucas",
        },
    ];

    const thoughts = [
    {
        content: "Frank Ocean Frank Ocean Frank Ocean Frank Ocean Frank Ocean",
        reaction: "Liked"
    },
    {
        content: "Hippo Campus Hippo Campus Hippo Campus Hippo Campus",
        reaction: "Emphasized"
    },
    {
        content: "Apple Apple Apple Apple Apple Apple Apple Apple ",
        reaction: "Curious"
    },

    ];

    await User.collection.insertMany(users);
    // await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.info('seeding complete!');
    process.exit(0);
});