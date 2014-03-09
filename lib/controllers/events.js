'use strict';

var mongoose = require('mongoose'),
    Event = mongoose.model('Event'),
    passport = require('passport');

/**
 * Create user
 */
exports.create = function (req, res, next) {
  var newEvent = new Event(req.body);
  newEvent.save(function(err) {
    if (err) return res.json(400, err);
    return res.json(newEvent);
  });
};

exports.changeDate = function(req,res,next){
    var oldDate = req.body.oldDate;
    var newDate = req.body.newDate;
    var name = String(req.body.name);
    console.log(oldDate);
    console.log(newDate);
    console.log(name);
     Event.findOne({name:name, start:oldDate},function(err, event){
      console.log(event);
      event.start = newDate;
      event.save(function(err){
        if (err) return res.send(400);

        res.send(200);
      });
    });
};

/**
 *  Get events
 */
exports.show = function (req, res) {
  var name = req.query.name;
  if(name){
    Event.find({name: name}, function (err, events) {
      if (!err) {
        res.json({events:events});
      } else {
        res.send(err);
      }
    });
  }else{
    Event.find(function (err, events) {
      if (!err) {
       res.json({events:events});
      } else {
       res.send(err);
      }
    });
  }

};



