
const Blog = require("./Blog");
const Comment = require("./Comment");
const Picture = require("./Picture");

Blog.hasMany(Picture, {
    foreignKey: "post_id"
});

Picture.belongsTo(Blog, {
    foreignKey: "post_id"
});







Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

module.exports = {  Blog, Comment , Picture};
