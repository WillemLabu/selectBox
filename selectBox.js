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

				// Closure!
				setLabel($(this));

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


			function setLabel($that) {

				var options = [];

				$that.children('option').each(function () {
					options.push($(this).val())
				});

				// This is horrible...
				$that.siblings('a').children('.label').html(
					$($that.children('option')[$.inArray($that.val(), options)]).text()
				);
			
			}

			// On DOM Ready, show the currently selected value.
			setLabel($(this));
			
		});

		return this; // Chaining!

	}

})(jQuery);
