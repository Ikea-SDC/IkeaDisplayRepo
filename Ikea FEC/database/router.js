var router = require('express').Router();
var controller = require('./controller.js');

router
.route('/display')
.get(controller.get);

module.exports.router = router;