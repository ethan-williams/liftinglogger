"use strict";

const jsonFruits = require('./data/fruits.json');

/**
 * Takes a force in pounds and returns a comment about which fruit you can squash
 */
function comment(_force) {
	let comment;
	let strongestFruitIndex = jsonFruits.fruits.length - 1;

	if ( _force < jsonFruits.fruits[0].force ) {
		// User is a precious baby with no fruit crushing powers
		comment = "I don't think you can crush any fruit with your thighs. Sorry!";
	} else if (_force > jsonFruits.fruits[strongestFruitIndex].force) {
		// User is a beast and can crush the strongest fruit in our database
		comment = jsonFruits.fruits[strongestFruitIndex].comment;
	} else {
		for(let i = 0; i < jsonFruits.fruits.length; i++) {
			if (jsonFruits.fruits[i].force == _force) {
				// Current fruit's force matched the user's force so set its comment
				comment = jsonFruits.fruits[i].comment;
				break;
			} else if (jsonFruits.fruits[i].force > _force) {
				// Current fruit's force exceeds the user's force so set the previous fruit's
				// comment
				comment = jsonFruits.fruits[i - 1].comment;
				break;
			}
		}
	}
	return comment;
}

module.exports.comment = comment;