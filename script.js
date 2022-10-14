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

	function createCssTunnel(
		width,
		height,
		borderRadius,
		border,
		boxShadowOuter,
		boxShadowInner
	) {
		// const tunnelFrame = newDiv.classList.add('animate-frame');
		const cssTunnelElement = document.getElementById(
			'tunnel-css-container'
		);

		for (let i = 0; i < 2; i++) {
			const newFrame = document.createElement('div');
			newFrame.classList.add('animate-frame');

			newFrame.style.cssText = `width: ${width};
				height: ${height};
				border-radius: ${borderRadius};
				position: absolute;
				border: ${border};
	

				box-shadow: ${boxShadowOuter},
				${boxShadowInner};`;

			cssTunnelElement.appendChild(newFrame);
			console.log(i);
		}
	}
	createCssTunnel(
		'100%',
		'100%',
		'50px',
		'5px #e68608 solid',
		'0px 0px 20px #b45c0a, inset 0px 0px 20px #b45c0a',
		'0px 0px 60px #d11d4a, inset 0px 0px 60px #d11d4a'
	);
});
