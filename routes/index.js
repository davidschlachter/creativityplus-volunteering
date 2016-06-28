var express = require('express');
var router = express.Router();

var shift = require('../controllers/shift');

/* GET home page. */
router.get('/', shift.checkShifts, function(req, res, next) {
  res.render('index', { title: 'OSDS Volunteering' });
});

module.exports = router;
