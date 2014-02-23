'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Recipe Schema
 */
var RecipeSchema = new Schema({
	title: String,
	scheduled: [Date],
	url: String
});

/**
 * Validations
 */
RecipeSchema.path('title').validate(function (title) {
  return title && title.length;
}, 'Recipe must have a title');

mongoose.model('Recipe', RecipeSchema);
