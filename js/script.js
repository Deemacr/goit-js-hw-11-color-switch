const colors = [
	'#FFFFFF',
	'#2196F3',
	'#4CAF50',
	'#FF9800',
	'#009688',
	'#795548',
];

let intervalId = null;

const refs = {
	start: document.querySelector('[data-action="start"]'),
	stop: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
	const n = randomIntegerFromInterval(0, colors.length - 1);
	return n;
};

const changeColor = () => {
	document.body.style.backgroundColor = colors[randomColor()];
	console.log(randomColor());
};

const startHandler = () => {
	refs.start.removeEventListener('click', startHandler);
	console.log('click');
	intervalId = setInterval(
		changeColor
		, 1000);
}

const stopHandler = () => {
	refs.start.addEventListener('click', startHandler);
	clearInterval(intervalId);
}

refs.start.addEventListener('click', startHandler);
refs.stop.addEventListener('click', stopHandler);