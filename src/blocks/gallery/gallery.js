$(() => {
	$('.gallery__likes').on('click', function() {
		const likesElm = $(this).find('.gallery__value');
		likesElm.text(parseInt(likesElm.text()) + 1);
	});
});
