!function(e){function t(o){if(n[o])return n[o].exports;var l=n[o]={exports:{},id:o,loaded:!1};return e[o].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(module,exports,__webpack_require__){eval("__webpack_require__(1);\n__webpack_require__(2);\n__webpack_require__(3);\n__webpack_require__(4);\nmodule.exports = __webpack_require__(5);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?")},function(module,exports){eval("$(() => {\n\t$('.gallery__likes').on('click', function () {\n\t\tconst likesElm = $(this).find('.gallery__value');\n\t\tlikesElm.text(parseInt(likesElm.text()) + 1);\n\t});\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/blocks/gallery/gallery.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/blocks/gallery/gallery.js?")},function(module,exports){eval("$(() => {\n\tconst $menuItem = $('.menu__item');\n\n\t$('.menu__bars').on('click', e => {\n\t\t$menuItem.not('.menu__item--logo').slideToggle(300);\n\t});\n\n\t$('.menu__close').on('click', e => {\n\t\t$menuItem.not('.menu__item--logo').slideUp(300);\n\t});\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/blocks/menu/menu.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/blocks/menu/menu.js?")},function(module,exports){eval("$(() => {\n\t$('.modal__ok').on('click', e => {\n\t\te.preventDefault();\n\t\t$('.modal__overlay').hide();\n\t\t$('.modal__box').hide();\n\t});\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/blocks/modal/modal.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/blocks/modal/modal.js?")},function(module,exports){eval("$(() => {\n\tconst $reviewForm = $('.review__form');\n\tconst $reviewError = $('.review__error');\n\n\t$reviewForm.on('submit', e => {\n\t\te.preventDefault();\n\n\t\t$reviewError.hide();\n\t\t$('.modal').hide();\n\n\t\tlet values = {};\n\t\t$.each($reviewForm.serializeArray(), (i, field) => {\n\t\t\tvalues[field.name] = field.value;\n\t\t});\n\n\t\tif (values.tel.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\\s\\.]{0,1}[0-9]{3}[-\\s\\.]{0,1}[0-9]{4}$/) !== null) {\n\t\t\t// sending form to server\n\t\t\t$('.modal--review-success').show();\n\t\t} else {\n\t\t\t$reviewError.show();\n\t\t\t$('.modal--review-fault').show();\n\t\t\treturn false;\n\t\t}\n\t});\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/blocks/review/review.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/blocks/review/review.js?")},function(module,exports){eval("$(() => {\n\tconst video = $('.video__player')[0];\n\tconst playButton = $('.video__btn--play:visible')[0];\n\tconst pauseButton = $(playButton).hasClass('video__btn--play--desktop') ? $('.video__btn--pause--desktop')[0] : $('.video__btn--pause--mobile')[0];\n\tconst fullScreenButton = $('.video__btn--full:visible')[0];\n\tconst seekBar = $('.video__seekbar')[0];\n\n\tif (video, playButton, pauseButton, fullScreenButton, seekBar) {\n\t\t// Event listener for the play/pause button\n\t\tplayButton.addEventListener(\"click\", () => {\n\t\t\tvideo.play();\n\n\t\t\t$(playButton).hide();\n\t\t\t$(pauseButton).show();\n\t\t});\n\n\t\tpauseButton.addEventListener(\"click\", () => {\n\t\t\tvideo.pause();\n\n\t\t\t$(pauseButton).hide();\n\t\t\t$(playButton).show();\n\t\t});\n\n\t\t// Event listener for the full-screen button\n\t\tfullScreenButton.addEventListener(\"click\", () => {\n\t\t\tif (video.requestFullscreen) {\n\t\t\t\tvideo.requestFullscreen();\n\t\t\t} else if (video.mozRequestFullScreen) {\n\t\t\t\tvideo.mozRequestFullScreen(); // Firefox\n\t\t\t} else if (video.webkitRequestFullscreen) {\n\t\t\t\tvideo.webkitRequestFullscreen(); // Chrome and Safari\n\t\t\t}\n\t\t});\n\n\t\t// Event listener for the seek bar\n\t\tseekBar.addEventListener(\"change\", () => {\n\t\t\t// Calculate the new time\n\t\t\tvar time = video.duration * (seekBar.value / 100);\n\n\t\t\t// Update the video time\n\t\t\tvideo.currentTime = time;\n\n\t\t\tif (!video.paused && $(pauseButton).is(':hidden')) {\n\t\t\t\t$(playButton).hide();\n\t\t\t\t$(pauseButton).show();\n\t\t\t}\n\t\t});\n\n\t\t// Pause the video when the slider handle is being dragged\n\t\tseekBar.addEventListener(\"mousedown\", () => {\n\t\t\tvideo.pause();\n\t\t});\n\n\t\t// Play the video when the slider handle is dropped\n\t\tseekBar.addEventListener(\"mouseup\", () => {\n\t\t\tvideo.play();\n\t\t});\n\n\t\t// Update the seek bar as the video plays\n\t\tvideo.addEventListener(\"timeupdate\", () => {\n\t\t\t// Calculate the slider value\n\t\t\tvar value = 100 / video.duration * video.currentTime;\n\n\t\t\t// Update the slider value\n\t\t\tseekBar.value = value;\n\t\t});\n\t}\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/blocks/video/video.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/blocks/video/video.js?")}]);