$(() => {
	$('.modal__ok').on('click', e => {
		e.preventDefault();
		$('.modal__overlay').hide();
		$('.modal__box').hide();
	});
});
