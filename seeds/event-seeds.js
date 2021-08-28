const { Event } = require('../models');

const commentData = [
  {
    comment_text: "Awesome site!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "I like posting comments.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "How do I delete cookies?",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Great. Now I'm hungry for cookies.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Delete system.32",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "My computer wont turn on now what did I just do? ",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;