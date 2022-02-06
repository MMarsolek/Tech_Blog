const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');


Post.hasMany(Comment);

User.hasMany(Post);
User.hasMany(Comment);

Comment.belongsTo(Post);
Comment.belongsTo(User);

module.exports = {
    User,
    Comment,
    Post,
}