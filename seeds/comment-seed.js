const {Comment} = require('../models');

const commentData = [
    {
        content: 'A nice read!',
        commenter_id: 1,
        post_id:1
    },
    {
        content: 'Waste of time!',
        commenter_id: 2,
        post_id:1
    },
    {
        content: "A pretty good example of the societal difference between bees and sloths. We should all strive to be as majestic as the mighty sloth when faced with the unrelenting rudeness that are bees.",
        commenter_id: 3,
        post_id:1
    },
    {
        content: 'Bees rule',
        commenter_id: 4,
        post_id:1
    },
    {
        content: 'I can\'t wait to see how this love story ends!',
        commenter_id: 1,
        post_id:2
    },
    {
        content: 'Much better than the second one',
        commenter_id: 2,
        post_id:2
    },
    {
        content: "The bees will never give up!",
        commenter_id: 3,
        post_id:2
    },
    {
        content: 'Sloths are better than bees!',
        commenter_id: 4,
        post_id:2
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;