/*!
 * This page contains common script
 */

$(document).ready(function () {

	function readURL(input,img_loc) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				img_loc.attr('src', e.target.result);
			};

			reader.readAsDataURL(input.files[0]);
		}
	}
	$(document).on('change','.select-file',function(){			
		var img_loc = $(this).parents('.upload-image').find('.image-preview');
		readURL(this,img_loc);
	});
	
	
	var trigger = $('.hamburger'),
	overlay = $('.overlay'),
	isClosed = false;

	trigger.click(function () {
		hamburger_cross();      
	});

	function hamburger_cross() {

		if (isClosed == true) {          
			overlay.hide();
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			isClosed = false;
		} else {   
			overlay.show();
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			isClosed = true;
		}
	}

	$('[data-toggle="offcanvas"]').click(function () {
		$('#wrapper').toggleClass('toggled');
	});  
});