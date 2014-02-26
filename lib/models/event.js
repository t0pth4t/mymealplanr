'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Event Schema
 */
var EventSchema = new Schema({
	title: String,
	start: Date,
	end: Date,
	url: String,
	allDay: Boolean

});

/**
 * Validations
 */
EventSchema.path('title').validate(function (title) {
  return title && title.length;
}, 'Event must have a title');

mongoose.model('Event', EventSchema);
