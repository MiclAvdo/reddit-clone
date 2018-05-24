const express = require('express'); 
const router = express.Router();
const commentsController = require('./../../controllers/comments');

router.post('/posts/:post_id/comments', commentsController.create);
router.put('/posts/:post_id/comments/:comment_id', commentsController.update);
router.delete('/posts/:post_id/comments/:comment_id', commentsController.destroy);

module.exports = router;