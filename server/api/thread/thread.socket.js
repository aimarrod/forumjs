/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var thread = require('./thread.model');

exports.register = function(socket) {
  thread.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  thread.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('thread:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('thread:remove', doc);
}
