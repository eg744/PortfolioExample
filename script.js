document.addEventListener('DOMContentLoaded', () => {
	const navbarToggle = document.querySelector('.hamburger');

	const primaryNavbar = document.querySelector('.primary-navigation');

	// Toggle mobile menu
	navbarToggle.addEventListener('click', () => {
		navbarToggle.classList.toggle('change');
		primaryNavbar.classList.toggle('toggleNav');

		const isVisible = primaryNavbar.getAttribute('data-visible');

		if (!isVisible) {
			primaryNavbar.setAttribute('data-visible', true);
			navbarToggle.setAttribute('data-expanded', true);
		} else {
			primaryNavbar.setAttribute('data-visible', false);
			navbarToggle.setAttribute('data-expanded', false);
		}
	});

	// Insert new html element inside existing element
	function insertAfter(newNode, referenceNode) {
		referenceNode.parentNode.insertBefore(
			newNode,
			referenceNode.nextSibling
		);
	}

	function setCssTunnelStyle() {
		let style = document.createElement('style');
		style.innerHTML = '.';
	}

	function animateCssTunnel() {
		const tunnelStyle = {};

		// const tunnelFrame = newDiv.classList.add('animate-frame');
		const cssTunnelElement = document.getElementById(
			'animate-css-container'
		);

		for (let i = 0; i < 2; i++) {
			const newFrame = document.createElement('div');
			newFrame.style.cssText;

			// newFrame.classList.add('animate-frame');

			cssTunnelElement.appendChild(newFrame);
			console.log(i);
		}
	}
	animateCssTunnel();
});
