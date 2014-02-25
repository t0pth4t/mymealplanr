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

var validatePresenceOf = function(value) {
  return value && value.length;
};


RecipeSchema
	.pre('save',function(next){
		if(!this.isNew){
			return next();
		}
		if(!validatePresenceOf(this.title)){
			next(new Error('Title is required'));
		}
		else{
			next();
		}
	});


/**
 * Validations
 */
RecipeSchema.path('title').validate(function (title) {
  validatePresenceOf(title);
}, 'Recipe must have a title');

module.exports = mongoose.model('Recipe', RecipeSchema);
