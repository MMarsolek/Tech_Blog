const router = require('express').Router();
const { Post, Comment } = require('../../models');

// The `/api/Posts` endpoint

router.get('/', (req, res) => {
  // find all posts
  // be sure to include its associated comment data
  Post.findAll({ include: Comment}).then(posts => {
    res.json(posts);
  })
});

router.get('/:id', (req, res) => {
  // find a single post by its `id`
  Post.findAll({
    where: {id : req.params.id},
    include: Comment
  }).then(post => {
    res.json(post);
  })
});

router.post('/', (req, res) => {
  // create a new post
  Post.create(req.body).then(posts => {
    res.json(posts);
  })
});

router.put('/:id', (req, res) => {
  // update a post by its `id` value
  Post.update((req.body),
  { where: {id : req.params.id}}
 ).then(posts => {
   res.json(posts);
 })
});

router.delete('/:id', (req, res) => {
  // delete a post by its `id` value
  Post.destroy({
    where: {id : req.params.id}
  }).then(posts => {
    res.json(posts);
  })
});

module.exports = router;
