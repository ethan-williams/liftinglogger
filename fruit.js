"use strict";

const jsonFruits = require('./data/fruits.json');

/**
 * Takes a force in pounds and returns a comment about which fruit you can squash
 */
function comment(_force) {
	let comment = "Incredible! " + _force + " pounds of force! I can't find the fruit you can crush though sorry.";

	for(let i = 0; i < jsonFruits.fruits.length; i++) {
		if (jsonFruits.fruits[i].force == _force) {

			// Current fruit's force matched the user's force, break
			comment = jsonFruits.fruits[i].comment;
			break;
		} else if (jsonFruits.fruits[i].force > _force) {

			// Current fruit's force exceeds user's force so return the previous comment, break
			comment = jsonFruits.fruits[i - 1].comment;
			break;
		}
	}

	return comment;
}

module.exports.comment = comment;