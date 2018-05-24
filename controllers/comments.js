/*

    Please import the correct files here.

*/
const Comment = require('./../models/Comment');
const Post = require('./../models/Post');

function create(req, res) {
  Post.findById(req.params.post_id, (err, post) => {
    post.comments.push(req.body.comment);
    post.save((err, doc) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(doc);
    });
  });
}

function update(req, res) {
  Post.findById(req.params.post_id).then((err, post) => {
    let newComment = post.id(req.params.comment_id);
    newComment.content = req.body.comtent;
    newComment.votes = req.body.votes;
    post.save((err, post) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(post);
    });
  });
}

function destroy(req, res) {
    Post.findById(req.params.post_id)
    .then((err, post) => {
        post.comments.id(req.params.id).remove();
        post.save(err => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(post);
        })
    })
}

module.exports = {
  create,
  update,
  destroy
};
