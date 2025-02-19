const express = require('express');
const router = express.Router();




  router.get('/', (req, res) => {
    res.send('Birds home page')
  })

  router.get('/about', (req, res) => {
    res.send('About birds')
  })

  router.get('/blogpost/:slug', (req, res) => {
    res.send(`This is the blog post form ${req.params.slug}`)
  })

  module.exports = router;