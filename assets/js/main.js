let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body


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
		pageWidget(['record']);
		pageWidget(['fund']);
		pageWidget(['sertificate']);
		pageWidget(['faq']);
		pageWidget(['reviews']);
		pageWidget(['vacancy']);
		pageWidget(['about']);
		pageWidget(['policy']);
		pageWidget(['404']);
		getAllClasses('html', '.elements_list');
	}

	if (location.pathname.includes('/404')) {
		$('.header').css('display', 'none')
		$('.footer').css('display', 'none')
		$('.base').css('padding-top', '0')
	}
	console.log(location.pathname.includes('/404'), 'good')
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	selectCity();
	backToTop();
	if(windowWidth > mediaPoint1) {
		popupForms('14px', '.prof_form', '.rec_remove', '.vacancy_item_link');
		popupForms('14px', '.record_form', '.rec_remove', '.trigger_record');
		popupForms('14px', '.req_form', '.req_remove', '.faq_ask_action');
		backToTop();
	} else {
		popupForms('0px', '.prof_form', '.rec_remove', '.vacancy_item_link');
		popupForms('0px', '.req_form', '.req_remove', '.faq_ask_action');
		popupForms('0px', '.record_form', '.rec_remove', '.trigger_record');
	}
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

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
		setTimeout(function() {
			$(closes).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: #fff', 'background: #cf8e1f'].join(';');
var message = 'Developed by Arkada-team https://arkada-web.ru/';

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


const docSlider = new Swiper('.documents_slider  ', {
  slidesPerView: 4,
	loop: true,
	spaceBetween: 20,
	pagination: {
		el: ".documents_pug",
		clickable: true,
	},
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
})







// Passing options (with default options)

$(document).ready(function() {
	
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
})











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

// $(document).ready(function() {
// 	$('.action_form--btn, .global_form--btn, .footer_form--btn, .ask_form--btn, .popup_succes--close').click(function(){
// 		$('.popup_succes').toggleClass('active');
// 	})
// })


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
})

function selectCity() {
	$(".header_city_single").click(function(){
		$(this).parent().toggleClass("active");
	})
	
	$(".header_city_item").click(function(){
		var currentele = $(this).html();
		$(".header_city_single>.header_address").html(currentele);
		$(this).parents(".header_contact_w").removeClass("active");
	})
}


function burgerMobile() {
	const triggerBurger = document.querySelector('.burger_trigger')
	const burgerPopup = document.querySelector('.burger')
	const burgerFail = document.querySelectorAll('.burger_closer')
	
	triggerBurger.addEventListener('click', () => {
		burgerPopup.classList.add('active')
		win.style.overflow = "";
	})

	triggerBurger.addEventListener('click', () => {
		burgerPopup.classList.add('active')
		win.style.overflow = "";
	})

	Array.from(burgerFail).map((item) => {
		item.addEventListener('click', () => {
			burgerPopup.classList.remove('active')
			win.style.overflow = "";
		})
	})

}


if($('form')[0]) {
	const btnSubmitAll = document.querySelectorAll('.forms_submit>button')
	Array.from(btnSubmitAll).map((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			close('.close')
			// succes('.succes')
		})
	})
}



function backToTop()  {

	$(window).scroll(function(){
		if($(window).scrollTop() > 500) {
			$('.backToTop').show(100);
		} else {
			$('.backToTop').hide(100);
		}
	});
	
	$('.backToTop_link').click(function(){
		$('html, body').animate({scrollTop: 0}, 300);
		return false;
	});
}



function popupForms(pr, form, close, trigger) {

	let popupForms = document.querySelector(form)
	let popupFormsTrigger = document.querySelectorAll(trigger)
	let popupFormsClose = document.querySelectorAll(close)
	let popupFormsSubmit = popupForms.querySelector('button[type="submit"]')
	// const burgerPopup = document.querySelector('.burger')
	
	Array.from(popupFormsTrigger).map((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			popupForms.classList.add('active');
			win.style.overflow = "hidden";
			win.style.paddingRight = pr; 
			// burgerPopup.classList.remove('active')
		})
	})


	Array.from(popupFormsClose).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.remove('active')
			win.style.overflow = "";
			win.style.paddingRight = ""; 
		})
	})

	popupFormsSubmit.addEventListener('click', () => {
		popupForms.classList.remove('active')
		win.style.overflow = "";
		win.style.paddingRight = ""; 
	})

	burgerMobile();
}



