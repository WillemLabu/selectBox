/*
* selectBox
* <select> wrapper for custom styles
* By Willem Labu
*/
(function ($) {

	$.fn.selectBox = function () {

		this.each(function () {

			$(this).wrap('<div class="selectBox" />');

			var	a = $('<a />'),
				b = $('<span class="label" />').html($($(this).children('option')[0]).text()),
				c = $('<span class="indicator" />').appendTo(a);

			b.appendTo(a);
			a.appendTo($(this).parent('.selectBox'));

			// Show a visible change when a selection is made
			$(this).on('change', function () {

				var options = [];
				$(this).children('option').each(function(){
					options.push($(this).val())
				});

				// This is horrible...
				$(this).siblings('a').children('.label').html(
					$(
						$(this).children('option')[
							$.inArray($(this).val(), options)
						]
					).text()
				);
			});

			// Add a class when hovering
			$(this).hover(
				function () {
					$(this).parent('.selectBox').addClass('over')
				},
				function () {
					$(this).parent('.selectBox').removeClass('over')
				}
			);

			// Remove error class when user interacts with the select
			$(this).on('click focus', function () {
				$(this).parent('.selectBox').removeClass('error');
			});

		});

		return this; // Chaining!

	}

})(jQuery);