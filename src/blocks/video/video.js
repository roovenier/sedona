$(() => {
	const video = $('.video__player')[0];
	const playButton = $('.video__btn--play:visible')[0];
	const pauseButton = ($(playButton).hasClass('video__btn--play--desktop'))
		? $('.video__btn--pause--desktop')[0]
		: $('.video__btn--pause--mobile')[0];
	const fullScreenButton = $('.video__btn--full:visible')[0];
	const seekBar = $('.video__seekbar')[0];

	if(video, playButton, pauseButton, fullScreenButton, seekBar) {
		// Event listener for the play/pause button
		playButton.addEventListener("click", () => {
			video.play();

			$(playButton).hide();
			$(pauseButton).show();
		});

		pauseButton.addEventListener("click", () => {
			video.pause();

			$(pauseButton).hide();
			$(playButton).show();
		});

		// Event listener for the full-screen button
		fullScreenButton.addEventListener("click", () => {
			if (video.requestFullscreen) {
				video.requestFullscreen();
			} else if (video.mozRequestFullScreen) {
				video.mozRequestFullScreen(); // Firefox
			} else if (video.webkitRequestFullscreen) {
				video.webkitRequestFullscreen(); // Chrome and Safari
			}
		});

		// Event listener for the seek bar
		seekBar.addEventListener("change", () => {
			// Calculate the new time
			var time = video.duration * (seekBar.value / 100);

			// Update the video time
			video.currentTime = time;

			if(!video.paused && $(pauseButton).is(':hidden')) {
				$(playButton).hide();
				$(pauseButton).show();
			}
		});

		// Pause the video when the slider handle is being dragged
		seekBar.addEventListener("mousedown", () => {
			video.pause();
		});

		// Play the video when the slider handle is dropped
		seekBar.addEventListener("mouseup", () => {
			video.play();
		});

		// Update the seek bar as the video plays
		video.addEventListener("timeupdate", () => {
			// Calculate the slider value
			var value = (100 / video.duration) * video.currentTime;

			// Update the slider value
			seekBar.value = value;
		});
	}
});
