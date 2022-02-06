const router = require('express').Router();
const { User, Post } = require('../../models');

// The `/api/Users` endpoint

router.get('/', (req, res) => {
  // find all Users
  // be sure to include its associated Post data
  User.findAll({ include: Post}).then(Users => {
    res.json(Users);
  })
});

router.get('/:id', (req, res) => {
  // find a single User by its `id`
  // be sure to include its associated Post data
  User.findAll({
    where: {id : req.params.id},
    include: Post
  }).then(User => {
    res.json(User);
  })
});

router.post('/', (req, res) => {
  // create a new User
  User.create(req.body).then(Users => {
    res.json(Users);
  })
});

router.put('/:id', (req, res) => {
  // update a User's name by its `id` value
  User.update((req.body),
  { where: {id : req.params.id}}
 ).then(Users => {
   res.json(Users);
 })
});

router.delete('/:id', (req, res) => {
  // delete on User by its `id` value
  User.destroy({
    where: {id : req.params.id}
  }).then(Users => {
    res.json(Users);
  })
});

module.exports = router;
