'use strict';

var express = require('express');
var controller = require('./post.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/:id', controller.index);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.post('/:id/vote', auth.isAuthenticated(), controller.vote);
router.put('/:id/vote', auth.isAuthenticated(), controller.vote);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
