'use strict';

var mongoose = require('mongoose'),
    Recipe = mongoose.model('Recipe'),
    Event = mongoose.model('Event');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Recipe.find(function (err, recipes) {
    if (!err) {
      return res.json(recipes);
    } else {
      return res.send(err);
    }
  });
};

exports.events = function(req, res){
  return Event.find(function (err, events) {
    if (!err) {
      return res.json(events);
    } else {
      return res.send(err);
    }
  });
};