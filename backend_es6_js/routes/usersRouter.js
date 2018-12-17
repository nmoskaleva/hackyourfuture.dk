const express = require('express')
const router = express.Router()

function listAllUsers(req, res, next) {
  const users = [
    {name: 'John', age: 34},
    {name: 'Adam', age: 50}
  ]
  // if (err) return next(err)
  res.send(users)
}

router
  .get('/', listAllUsers)
//   .get('/:id', getUserById)
//   .post('/', createUser)
//   .delete('/:id', deleteUser)
//   .put('/:id', updateUser)
// todo: implement router functions

module.exports = router
