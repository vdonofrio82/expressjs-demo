
var express = require('express');
var router = express.Router();

// GET /users
router.get('/users', (req, res) => {
  res.send('Got a GET request at /users');
});

// POST /user
router.post('/user', (req, res) => {
  res.send('Got a POST request at /user');
});

// PUT /user
router.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// DELETE /user
router.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

module.exports = router;
