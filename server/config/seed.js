/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thread = require('../api/thread/thread.model');
var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
      User.findOne({name: 'Test User'}).exec(function(err, user){
        Thread.find({}).remove(function() {
          Thread.create({
            title : 'Development Tools',
            author: user._id
          }, {
            title : 'Server and Client integration',
            author: user._id
          }, {
            title : 'Smart Build System',
            author: user._id
          }, {
            title : 'Optimized Build',
            author: user._id
          }, {
            title : 'Deployment Ready',
            author: user._id
          }, function(){
            console.log('Created other stuff');
          });
        });
      });
    }
  );
});
