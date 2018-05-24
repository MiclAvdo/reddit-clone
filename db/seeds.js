require('dotenv').config({path: './../.env'});
require('./config');

const Post = require('../models/Post');
const Comment = require('../models/Comment');

const seed = Promise.all([Post.remove({}), Comment.remove({})])

.then(() => {
    return Post.create([
        { title: 'Cats', content: 'they are awesome', thumbnail_image_url: 'https://imgur.com/bgnIKWK.png', votes: 132, comments: []},
        { title: 'Send Girl to Moon', content: "we're sending a girl to the moon", thumbnail_image_url: 'https://i.imgur.com/nrkY6fb.jpg', votes: 99, comments: []},
        { title: 'BattleFront 2', content: 'This Game sux', thumbnail_image_url: 'https://i.imgur.com/TF9hlJs.jpg', votes: 57, comments: []}
    ])
 })
 .then(posts => {
    posts[0].comments.push({content: 'They are adorable', votes: 99});
    posts[1].comments.push({content: 'We did it Reddit', votes: 72});
    posts[2].comments.push({content: 'I hate this game', votes: 69});
    Promise.all([ posts[0].save(), posts[1].save(), posts[2].save() ])
        .then(function() {
            require('mongoose').connection.close();
            process.exit();
        });
 })
 .catch(err => console.log(err));