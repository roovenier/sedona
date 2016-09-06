$(() => {
	const $menuItem = $('.menu__item');

	$('.menu__bars').on('click', e => {
		$menuItem.not('.menu__item--logo').slideToggle(300);
	});

	$('.menu__close').on('click', e => {
		$menuItem.not('.menu__item--logo').slideUp(300);
	});
});
