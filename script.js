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
});
