var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Openshift' });
});

router.get('/foo', function(req, res, next) {
  res.render('foo', { title: 'Openshift' });
});

module.exports = router;
