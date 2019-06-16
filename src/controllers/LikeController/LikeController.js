const Post = require("../../models/Post/Post");

module.exports = {
  async store(req, res) {
    return res.json({ ok: true });
  }
};
