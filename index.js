var timestamprange = require('timestamp-range');
var timeresolutions = require('time-resolutions');
var datefloor = require('date-floor');

module.exports = function timestamp_series(resolution, start, end){
	var range = timestamprange(start, end);
	var range_resolution = range.resolution;
	var range_ms = range.ms;

	var unit_ms = timeresolutions.ms(resolution);

	var start_timestamp = datefloor(start, resolution).getTime();
	var end_timestamp = datefloor(end, resolution).getTime() + unit_ms;

	var final_end = datefloor(end_timestamp, resolution);

	var current_timestamp = start_timestamp;

	var arr = [];

	while(current_timestamp<=end_timestamp){
		arr.push(current_timestamp);
		current_timestamp += unit_ms;
	}

	if(final_end>arr[arr.length-1]){
		arr.push(final_end.getTime());
	}

	return arr;
}
