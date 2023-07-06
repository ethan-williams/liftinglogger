"use strict";

const jsonFruits = require('./data/fruits.json');

/**
 * Takes a force in pounds and returns a comment about which fruit you can squash
 */
function comment(_force) {
	var comment;

	if ( _force < jsonFruits.fruits[0].force ) {
		comment = "I don't know of a fruit you can crush. Sorry!";
	} else {
		var max = Number.MIN_VALUE;
		for (var i = 0; i < jsonFruits.fruits.length; i++) {
			if (jsonFruits.fruits[i].force <= _force && jsonFruits.fruits[i].force > max) {
				max = jsonFruits.fruits[i].force;
				comment = jsonFruits.fruits[i].comment;
			}
		}
	}

	return comment;
}

module.exports.comment = comment;