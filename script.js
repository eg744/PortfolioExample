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

	// function setTunnelStyles(){
	// 	const styles={width: `${width}`,
	// 			height: `${height}`,
	// 			border-radius: ${borderRadius};
	// 			position: absolute;
	// 			border: ${border};

	// 			box-shadow: ${boxShadowOuter},
	// 			${boxShadowInner};
	// 			transform: rotate(${rotateDeg}) translateY(${translateY}) translateZ(${translateZ})`}`
	// }

	function createCssTunnel(
		width,
		height,
		borderRadius,
		border,
		boxShadowOuter,
		boxShadowInner,
		rotateDeg,
		translateY,
		translateZ,
		opacity,
		animationDelay
	) {
		const cssTunnelElement = document.getElementById(
			'tunnel-css-container'
		);

		for (let i = 0; i < 12; i++) {
			const newFrame = document.createElement('div');

			newFrame.classList.add('animate-frame');
			newFrame.style.cssText = `width: ${width}%;
				height: ${height}%;
				border-radius: ${borderRadius}%;
				position: absolute;
				border: ${border};

				box-shadow: ${boxShadowOuter},
				${boxShadowInner};
				transform: rotate(${rotateDeg}deg) translateY(${translateY}px) translateZ(${translateZ}px);
				opacity: ${opacity};
				animation-delay:${animationDelay}s;`;

			cssTunnelElement.appendChild(newFrame);
			width = width + 5;
			// rotateDeg = rotateDeg - 5;
			// translateY = translateY + 50;
			translateZ = translateZ - 10;
			opacity = opacity - 0.05;
			animationDelay = animationDelay + 0.2;
		}
	}
	createCssTunnel(
		100,
		100,
		100,
		'5px #e68608 solid',
		'0px 0px 20px #b45c0a, inset 0px 0px 20px #b45c0a',
		'0px 0px 60px #d11d4a, inset 0px 0px 60px #d11d4a',
		180,
		0,
		0,
		1,
		0.1
	);
});
