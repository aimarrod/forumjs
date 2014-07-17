/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /threads              ->  index
 * POST    /threads              ->  create
 * GET     /threads/:id          ->  show
 * PUT     /threads/:id          ->  update
 * DELETE  /threads/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Thread = require('./thread.model');

// Get list of Threads
exports.index = function(req, res) {
  Thread.find().populate('author').exec(function (err, threads) {
    if(err) { return handleError(res, err); }
    return res.json(200, threads);
  });
};

// Get a single Thread
exports.show = function(req, res) {
  Thread.findById(req.params.id, function (err, thread) {
    if(err) { return handleError(res, err); }
    if(!thread) { return res.send(404); }
    return res.json(thread);
  });
};

// Creates a new Thread in the DB.
exports.create = function(req, res) {
  Thread.create(req.body, function(err, thread) {
    if(err) { return handleError(res, err); }
    return res.json(201, thread);
  });
};

// Deletes a Thread from the DB.
exports.destroy = function(req, res) {
  Thread.findById(req.params.id, function (err, thread) {
    if(err) { return handleError(res, err); }
    if(!thread) { return res.send(404); }
    thread.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
