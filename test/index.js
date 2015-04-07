var chai = require('chai');
var assert = chai.assert;
var beattime = require('../index');
var moment = require('moment');

describe("beattime", function() {
	describe("#toBeatTime", function() {
		it('should consider 00:00 UTC+1 as @0', function() {
			assert.equal(
				0,
				beattime.toBeatTime(
					moment("2013-02-08 00:00:00.000+01:00").toDate())
				);
		});
		it('should consider 00:00 PST as 333.3333', function() {
			assert.equal(
				1000/3,
				beattime.toBeatTime(
					moment("2013-02-08 00:00:00.000-07:00").toDate())
				);
		});
	});
	describe("#fromBeatTime", function() {
		it('should consider 00:00 UTC+1 as @0', function() {
			assert.equal(
				"00:00",
				beattime.fromBeatTime(0));
		});

		it('should consider @333.333 as 08:00', function() {
			assert.equal(
				"08:00",
				beattime.fromBeatTime(1000/3));
		});
	});
});