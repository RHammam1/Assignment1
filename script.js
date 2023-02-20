"use strict";

function changeColor() {
	let color = document.body.style.color;
	if (color === 'brown') {
		document.body.style.color = 'black';
	} else {
		document.body.style.color = 'brown';
	}
}