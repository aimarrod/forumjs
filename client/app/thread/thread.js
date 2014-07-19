'use strict';

angular.module('forumjsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('threads', {
        url: '/threads',
        templateUrl: 'app/thread/thread.html',
        controller: 'ThreadCtrl'
      })
      .state('newThread', {
        url: '/newThread',
        templateUrl: 'app/thread/newThread.html',
        controller: 'NewThreadCtrl'
      })
      .state('showThread', {
        url: '/showThread/{id}',
        templateUrl: 'app/thread/showThread.html',
        controller: 'ShowThreadCtrl'
      });
  });