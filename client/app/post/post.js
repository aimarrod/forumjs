'use strict';

angular.module('forumjsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newPost', {
        url: '/newPost/{id}',
        templateUrl: 'app/post/new/newPost.html',
        controller: 'NewPostCtrl'
      })
      .state('editPost', {
        url: '/editPost/{id}',
        templateUrl: 'app/post/new/thread/newPost.html',
        controller: 'PostCtrl'
      });
  });