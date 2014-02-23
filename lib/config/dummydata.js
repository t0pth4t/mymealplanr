'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing'),
  Event = mongoose.model('Event');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});

// Clear old users, then add a default user
  var date = new Date();
  var myDate = {
    day : date.getDate(),
    month : date.getMonth(),
    year : date.getFullYear(),
  };
Event.find({}).remove(function() {
  Event.create(
      {
        title: 'All Day Event',
        start: new Date(myDate.year, myDate.month, 1)
      },
      {
        title: 'Long Event',
        start: new Date(myDate.year, myDate.month, myDate.day - 5),
        end: new Date(myDate.year, myDate.month, myDate.day - 2)
      },
      {
        id: 999,title: 'Repeating Event',
        start: new Date(myDate.year, myDate.month, myDate.day - 3, 16, 0),
        allDay: false
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(myDate.year, myDate.month, myDate.day + 4, 16, 0),
        allDay: false
      },
      {
        title: 'Birthday Party',
        start: new Date(myDate.year, myDate.month, myDate.day + 1, 19, 0),
        end: new Date(myDate.year, myDate.month, myDate.day + 1, 22, 30),
        allDay: false},
      {
        title: 'Click for Google',
        start: new Date(myDate.year, myDate.month, 28),
        end: new Date(myDate.year, myDate.month, 29),
        url: '/login'
      },
   function() {
      console.log('finished populating events');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});
