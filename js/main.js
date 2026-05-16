$(document).ready(function() {

	
	/* Navigation burger onclick side navigation show */
$('.burger-container').on('click', function(e) {
		e.stopPropagation();

		$(this).toggleClass('change');
		$('.main-navigation').toggleClass('active');
		$('body').toggleClass('stop-scroll');
	});

	$('.main-navigation a').on('click', function() {
		closeMenu();
	});

	$(document).on('click', function() {
		closeMenu();
	});

	function closeMenu() {
		$('.main-navigation').removeClass('active');
		$('.burger-container').removeClass('change');
		$('body').removeClass('stop-scroll');
	}

	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	/* Prevent carousel item links from jumping the page */
	$('.fh5co-books .single-book__img').on('click', function(e) {
		e.preventDefault();
	});
	
});



var counta = 0;

$(window).scroll(function(e){


	/* Onscroll number counter */
	var statisticNumbers = $('.single-count');
	if(statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (counta == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				});
			});
			counta = 1;
		}
	}

});

