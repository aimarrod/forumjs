'use strict';

angular.module('forumjsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('threads', {
        url: '/threads',
        templateUrl: 'app/thread/main/thread.html',
        controller: 'ThreadCtrl'
      })
      .state('newThread', {
        url: '/newThread',
        templateUrl: 'app/thread/new/newThread.html',
        controller: 'NewThreadCtrl'
      })
      .state('showThread', {
        url: '/showThread/{id}',
        templateUrl: 'app/thread/show/showThread.html',
        controller: 'ShowThreadCtrl'
      });
  });