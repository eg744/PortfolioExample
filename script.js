document.addEventListener('DOMContentLoaded', () => {
	const navbarToggle = document.querySelector('.hamburger');

	const primaryNavbar = document.querySelector('.primary-navigation');

	const pageTitle = document.querySelector('.title-name');
	const externalLinks = document.querySelector('.external');

	const readMoreButton = document.querySelector('.read-more-button');
	const aboutMe = document.querySelector('.about-me-secondary');

	const aboutMeArrow = document.getElementById('read-more-arrow');

	navbarToggle.addEventListener('click', () => {
		navbarToggle.classList.toggle('change');
		primaryNavbar.classList.toggle('toggleNav');
		pageTitle.classList.toggle('translateTitle');
		externalLinks.classList.toggle('translateTitle');

		const isVisible = primaryNavbar.getAttribute('data-visible');

		if (!isVisible) {
			primaryNavbar.setAttribute('data-visible', true);
			navbarToggle.setAttribute('data-expanded', true);
		} else {
			primaryNavbar.setAttribute('data-visible', false);
			navbarToggle.setAttribute('data-expanded', false);
		}
	});

	// Nav background on scroll larger screen sizes
	let lastKnownScrollPosition = 0;
	let ticking = false;

	function navBackground(scrollPos) {
		if (scrollPos > 200) {
			primaryNavbar.classList.add('nav-bg-color');
		} else {
			primaryNavbar.classList.remove('nav-bg-color');
		}
	}

	document.addEventListener('scroll', (e) => {
		lastKnownScrollPosition = window.scrollY;

		if (!ticking) {
			window.requestAnimationFrame(() => {
				navBackground(lastKnownScrollPosition);
				ticking = false;
			});
			ticking = true;
		}
	});

	// Toggle read more section
	readMoreButton.addEventListener('click', () => {
		aboutMe.classList.toggle('about-visible');
		aboutMeArrow.classList.toggle('arrow-closed');
		aboutMeArrow.classList.toggle('arrow-opened');
	});

	// CSS "tunnel" just for fun
	// function createCssTunnel(
	// 	width,
	// 	height,
	// 	borderRadius,
	// 	border,
	// 	boxShadowOuter,
	// 	boxShadowInner,
	// 	rotateDeg,
	// 	translateY,
	// 	translateZ,
	// 	opacity,
	// 	animationDelay
	// ) {
	// 	const cssTunnelElement = document.getElementById(
	// 		'tunnel-css-container'
	// 	);

	// 	for (let i = 0; i < 12; i++) {
	// 		const newFrame = document.createElement('div');

	// 		newFrame.classList.add('animate-frame');
	// 		newFrame.style.cssText = `width: ${width}%;
	// 			height: ${height}%;
	// 			border-radius: ${borderRadius}%;
	// 			position: absolute;
	// 			border: ${border};

	// 			box-shadow: ${boxShadowOuter},
	// 			${boxShadowInner};
	// 			transform: rotate(${rotateDeg}deg) translateY(${translateY}px) translateZ(${translateZ}px);
	// 			opacity: ${opacity};
	// 			animation-delay:${animationDelay}s;`;

	// 		cssTunnelElement.appendChild(newFrame);
	// 		width = width + 5;
	// 		// rotateDeg = rotateDeg - 5;
	// 		// translateY = translateY + 50;
	// 		translateZ = translateZ - 10;
	// 		opacity = opacity - 0.05;
	// 		animationDelay = animationDelay + 0.2;
	// 	}
	// }
});
