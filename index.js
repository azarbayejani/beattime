/**
 * Beattime
 * https://github.com/azarbayejani/beattime
 *
 * Copyright (c) 2015 Bobby Azarbayejani
 * Licensed under the "New" 3-Clause BSD License
 */

var moment = require('moment');

module.exports = {

  /**
   *
   * Returns the beat time for given Date object
   *
   * @param {Date} date
   * @return {Number} beatTime
   */
  toBeatTime: function(date) {
  	var momentDate = moment(date).utcOffset(1);
  	var hours   = momentDate.hour();
  	var minutes = momentDate.minute();
  	var seconds = momentDate.second();

  	return seconds + minutes*60 + hours*3600 / 86.4;
  },

  /**
   *
   * Returns the time in UTC+1 for given Date object
   *
   * @param {Number} beatTime
   * @return {String} timeUtc+1
   */
  fromBeatTime: function(date) {
  	var beatToSeconds = 86.4;
  	var seconds = date * beatToSeconds;
  	var hours = Math.floor(seconds / 3600);
  	seconds =  seconds - hours * 3600;
  	var minutes = Math.floor(seconds / 60);
  	seconds = seconds - minutes * 60;
  	return moment()
  			.hours(hours)
  			.minutes(minutes)
  			.seconds(seconds)
  			.format("HH:mm");
  }
}
