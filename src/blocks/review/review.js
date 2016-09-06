$(() => {
	const $reviewForm = $('.review__form');
	const $reviewError = $('.review__error');

	$reviewForm.on('submit', e => {
		e.preventDefault();
		
		$reviewError.hide();
		$('.modal').hide();

		let values = {};
		$.each($reviewForm.serializeArray(), (i, field) => {
			values[field.name] = field.value;
		});

		if(values.tel.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/) !== null) {
			// sending form to server
			$('.modal--review-success').show();
		} else {
			$reviewError.show();
			$('.modal--review-fault').show();
			return false;
		}
	});
});
