var Post = require('../../models/post')
var router = require('express').Router()

router.get('/api/posts', function (req, res, next) {
  Post.find()
  .sort('-date')
  .exec(function(err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})

router.get('/api/posts/:id', function (req, res, next) {
  Post.findById(req.params.id)
  .sort('-date')
  .exec(function(err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})


router.post('/api/posts', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
	departure: req.body.departure,
	arrival: req.body.arrival,
	origin: req.body.origin,
	days: req.body.days,
	destination: req.body.destination,
	seats: req.body.seats,
	notes: req.body.notes

  })
  post.save(function (err, post) {
    if (err) {  res.send(err) }
    res.json(201, post)
  })
})

router.post('/', function (req, res, next) {
  var post = new Post({body: req.body.body})
  post.username = req.auth.username
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.json(201, post)
  })
})

module.exports = router