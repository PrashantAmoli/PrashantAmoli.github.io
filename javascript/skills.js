// Info Text

// const info = [
//   'Prashant Amoli. ',
//   'a Software Developer...',
//   'an Engineering Student...',
//   'a Full-Stack Web Developer...',
// ]
// let count = 0
// let index = 0
// let currentText = ''
// let letter = ''

// function type() {
//   if (count === info.length) {
//     count = 0
//   }

//   currentText = info[count]
//   letter = currentText.slice(0, ++index)
//   document.querySelector('#name').textContent = letter
//   document.querySelector('#info').textContent = letter

//   if (letter.length === currentText.length) {
//     count++
//     index = 0
//   }

//   setTimeout(type, 200)
// }

// type()

// ANCHOR Responsive Radius Code
const width = window.innerWidth;
let radius;

document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth < 450) {
		radius = 175;
	} else if (window.innerWidth > 450 && window.innerWidth < 800) {
		radius = 250;
	} else {
		radius = 300;
	}

	TagCloud('.content', texts, {
		// radius in px 200 || 150
		radius: radius,

		// animation speed  // slow, normal, fast
		maxSpeed: 'fast',
		initSpeed: 'fast',

		// 0 = top  // 90 = left  // 135 = right-bottom
		direction: 135,

		// interact with cursor move on mouse out
		keep: true,
	});
});

window.addEventListener('resize', () => {
	if (window.innerWidth < 450 && radius !== 175) {
		window.location.reload();
	} else if (window.innerWidth > 450 && window.innerWidth < 800 && radius !== 250) {
		window.location.reload();
	} else if (window.innerWidth > 800 && radius !== 300) {
		window.location.reload();
	}
});

// STUB Skills Section
const texts = [
	'JavaScript',
	'TypeScript',
	'HTML',
	'CSS',
	'ReactJS',
	'NextJS',
	'NodeJS',
	'Express',
	'Firebase',
	'MongoDB',
	'SQL',
	'Python',
	'C/C++',
	'Git',
	'PHP',
	'PWA',
	'Solidity',
	'Blockchain',
	'Truffle',
	'Hardhat',
	'NFT',
	'Ethereum',
];

console.log(`Radius: ${radius} `);

// SECTION Functions
// switch style
function toDefault() {
	document.body.classList.remove('light');
}
function toLight() {
	document.body.classList.add('light');
}
// add / remove tag
function addTag() {
	if (!tc) return;
	texts.push('New');
	tc.update(texts);
}
function removeTag() {
	if (!tc) return;
	texts.pop();
	tc.update(texts);
}
var otherTcs = [];
// create and destroy tagcloud
function toCreate() {
	if (otherTcs.length >= 3) return;
	otherTcs.push(TagCloud('.content', texts));
}
function toDestroy() {
	var last = otherTcs[otherTcs.length - 1];
	if (!last) return;
	last.destroy();
	otherTcs.pop();
}
// pause and resume tagcloud animation
function pause() {
	[].concat(tc, otherTcs).forEach(function (e) {
		return e.pause();
	});
}
function resume() {
	[].concat(tc, otherTcs).forEach(function (e) {
		return e.resume();
	});
}
// add and remove clickEvent
function clickEventHandler(e) {
	if (e.target.className === 'tagcloud--item') {
		window.open(`https://www.google.com/search?q=${e.target.innerText}`, '_blank');
	}
}
function addClickEvent() {
	var rootEl = document.querySelector('.content');
	rootEl.addEventListener('click', clickEventHandler);
}
function removeClickEvent() {
	var rootEl = document.querySelector('.content');
	rootEl.removeEventListener('click', clickEventHandler);
}

// !SECTION ------------------------------------------

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => observer.observe(element));
