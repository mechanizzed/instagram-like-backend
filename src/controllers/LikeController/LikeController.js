const Post = require("../../models/Post/Post");

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);

    post.likes === 0 ? (post.likes += 1) : (post.likes -= 1);
    await post.save();
    req.io.emit("like", post);
    return res.json(post);
  }
};
