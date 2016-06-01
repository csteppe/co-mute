var db = require('../db')
var Post = db.model('Post', {
  username: { type: String, required: true },
  departure:     { type: String, required: true },
  arrival:     { type: String, required: true },
  origin:     { type: String, required: true },
  days:     { type: Number, required: true },
  destination:    { type: String, required: true },
  seats:     { type: Number, required: true },
  notes:     { type: String, required: true },
  date:     { type: Date, required: true, default: Date.now }
})
module.exports = Post