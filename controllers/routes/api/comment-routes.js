const router = require('express').Router();
const { Comment, User } = require('../../../models');

// The `/api/Comments` endpoint

router.get('/', (req, res) => {
  // find all Comments
  // be sure to include its associated User data
  Comment.findAll({ include: User}).then(Comments => {
    res.json(Comments);
  })
});

router.get('/:id', (req, res) => {
  // find a single Comment by its `id`
  // be sure to include its associated User data
  Comment.findAll({
    where: {id : req.params.id},
    include: User
  }).then(Comment => {
    res.json(Comment);
  })
});

router.post('/', (req, res) => {
  // create a new Comment
  Comment.create(req.body).then(Comments => {
    res.json(Comments);
  })
});

router.put('/:id', (req, res) => {
  // update a Comment's name by its `id` value
  Comment.update((req.body),
  { where: {id : req.params.id}}
 ).then(Comments => {
   res.json(Comments);
 })
});

router.delete('/:id', (req, res) => {
  // delete on Comment by its `id` value
  Comment.destroy({
    where: {id : req.params.id}
  }).then(Comments => {
    res.json(Comments);
  })
});

module.exports = router;
