timestamp-series
================

[![Travis](http://img.shields.io/travis/binocarlos/timestamp-series.svg?style=flat)](https://travis-ci.org/binocarlos/timestamp-series)

Get an array of timestamps between 2 points with a configurable resolution

## installation

```
$ npm install timestamp-series
```

## usage

Give a start and end date with optional resolution and get back an array of timestamps between the start and end date.

The resolution is one of:

 * year
 * month
 * day
 * hour
 * minute
 * second
 * millisecond

```js
var timestampseries = require('timestamp-series');

function get_day_series(){
	var s = new Date('05/06/2014 12:00:00')
	var e = new Date('05/12/2014 12:00:00')
	return timestampseries('day', s, e);	
}

console.dir(get_day_series());

/*
[ 1399334400000,
  1399420800000,
  1399507200000,
  1399593600000,
  1399680000000,
  1399766400000,
  1399852800000,
  1399939200000 ]
  */


function get_year_series(){
	var s = new Date('05/06/1994 12:00:00')
	var e = new Date('05/12/2011 12:00:00')
	return timestampseries('year', s, e);	
}

console.dir(get_year_series());

/*
[ 757382400000,
  788940000000,
  820497600000,
  852055200000,
  883612800000,
  915170400000,
  946728000000,
  978285600000,
  1009843200000,
  1041400800000,
  1072958400000,
  1104516000000,
  1136073600000,
  1167631200000,
  1199188800000,
  1230746400000,
  1262304000000,
  1293861600000,
  1325376000000 ]
  */
```

## license

MIT
