var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

/* Get New Note Page */
router.get('/newnote', function(req, res) {
    return standupCtrl.getNote(req, res);
});

/* Post New Note Page */
router.post('/newnote', function(req, res) {
    return standupCtrl.create(req, res);
});


module.exports = router;