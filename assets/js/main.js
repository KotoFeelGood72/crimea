let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';


$(document).ready(function ($) {
	$body = $('body');

	if (devStatus) {
		pageWidget(['index']);
		pageWidget(['news']);
		pageWidget(['services']);
		pageWidget(['single-service']);
		pageWidget(['speciality']);
		pageWidget(['articles']);
		pageWidget(['single-articles']);
		pageWidget(['single-spec']);
		pageWidget(['contacts']);
		pageWidget(['ask']);
		pageWidget(['faq']);
		pageWidget(['reviews']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		// var vh2 = document.documentElement.clientHeight * 0.01;

		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: #fff', 'background: #cf8e1f'].join(';');
var message = 'Developed by Glivera-team https://glivera-team.com/';

console.info('%c%s', styles, message);


const heroSlider = new Swiper('.hero_slider ', {
  slidesPerView: 1,
	loop: true,
	pagination: {
		el: ".hero_pug",
		clickable: true,
	},
})

const rateSlider = new Swiper('.special_slider ', {
  slidesPerView: 4,
	loop: true,
	spaceBetween: 30,
	pagination: {
		el: ".special_pug",
		clickable: true,
	},
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 2
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
})

const revSlider = new Swiper('.reviews_slider ', {
  slidesPerView: 1,
	loop: true,
	spaceBetween: 5,
	pagination: {
		el: ".reviews_pug",
		clickable: true,
	},
})







// Passing options (with default options)
const selectFilter = Array.from(document.querySelectorAll('select')).map(item => new Choices(item, {
	
	searchEnabled: false,
	placeholder: false,
	shouldSortItems: true,
	position: 'bottom',
	resetScrollPosition: true,
	noChoicesText: '',
	placeholder: true,
	itemSelectText: '',
}));

// if($('.special_filter')[0]) {
// 	selectFilter();
// }










$(document).ready(function() {
	const items = document.querySelectorAll(".faq_list--item");
	const state = "active";
	
	
	items.forEach(function (item, index) {
		const eCta = item.querySelector('.faq_btn--more')
		eCta.onclick = function () {
			this.classList.toggle(state);
			this.nextElementSibling.classList.toggle(state);
			this.innerHTML = 'Скрыть ответ';
			if (this.classList.contains('active')) {
				this.innerHTML = 'Скрыть ответ';	
			}
			else  {
				this.innerHTML = 'Показать ответ';	
			}
			
		};
	});
})

$(document).ready(function() {
	$('.action_form--btn, .global_form--btn, .footer_form--btn, .ask_form--btn, .popup_succes--close').click(function(){
		$('.popup_succes').toggleClass('active');
	})
})


$(document).ready(function () {
	$('.header_popup--link').click(function () {
			$(this).toggleClass('active').next().slideToggle();
			$('.header_popup--link').not(this).removeClass('active').next().slideUp();
	});
});

$(document).ready(function() {

	$( ".header_popup--item" ).each(function() {
    if($(this).children('.header_submenu--popup').length  == 0) {
    var link = $(this).children('.header_popup--link');
    link.addClass('none');
     }
	});

	$( ".header_nav--item" ).each(function() {
    if($(this).children('.header_submenu').length  == 0) {
    var navLink = $(this).children('.header_nav--link');
		var navItem = $(this);
    navItem.addClass('none');
		navLink.addClass('none');
     }
	});

	$('.header_nav--open').click(function() {
		$('.header_popup--window').toggleClass('active');
		$(this).toggleClass('active');
	})

	// $('.sidebar_mobile').click(function() {
	// 	$('.sidebar_list').slideToggle();
	// 	$(this).toggleClass('active');
	// })
})





