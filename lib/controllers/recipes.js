'use strict';

var mongoose = require('mongoose'),
    Recipe = mongoose.model('Recipe'),
    passport = require('passport');

/**
 * Create user
 */
exports.create = function (req, res, next) {
  var newRecipe = new Recipe(req.body);
  newRecipe.save(function(err) {
    if (err) return res.json(400, err);
    return res.json(newRecipe);
  });
};

/**
 *  Get recipe
 */
exports.show = function (req, res) {
  var name = req.query.name;
  if(name){
    Recipe.find({name: name}, function (err, recipes) {
      if (!err) {
        res.json({recipes:recipes});
      } else {
        res.send(err);
      }
    });
  }else{
    Recipe.find(function (err, recipes) {
      if (!err) {
       res.json({recipes:recipes});
      } else {
       res.send(err);
      }
    });
  }

};



