// ===== NAVBAR ===== //
$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 100) {
    $(".nav-menu").addClass("custom-navbar");
  } else {
    $(".nav-menu").removeClass("custom-navbar");
  }
});

// ===== HAMBURGER BUTTON ===== //
$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });
});

// =============== Active Nav ==================//
$( '.navbar-nav a' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

//======================counter js==================================//

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 100, 3000);
  counter("count2", 1800, 2012, 3500);
  counter("count3", 0, 100, 3000);
});


// ====================Model=========================//

var myCarousel = document.querySelector('#carouselExampleControls')
var myModalEl = document.getElementById('exampleModal')

myModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    var bsCarousel = bootstrap.Carousel.getInstance(myCarousel)
    bsCarousel.to(trigger.dataset.bsSlideTo)
})



// ====================Model-2=========================//

document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.querySelector('#carouselExampleFade');
  var myModalEl = document.getElementById('tabModal');

  myModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget;
    var bsCarousel = new bootstrap.Carousel(myCarousel);
    bsCarousel.to(trigger.dataset.bsSlideTo);
  });
});

// ===================== Tabs ===========================//

  const pills = document.querySelectorAll('.nav-pills .nav-link');
  const carousel = document.getElementById('carouselExampleControls');

  pills.forEach((pill, index) => {
    pill.addEventListener('click', () => {
      const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls'), {
        interval: false
      });
      carousel.to(index); // Change the carousel slide to the corresponding pill index
    });
  });

  //====================== Tabs Slider ==============================//

  $(document).ready(function() {
    $("#owl-demo, #owl-demo, #owl-demo, #owl-demo").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: true,
          loop: false
        }
      }
    });
  });

  // ================= Team slider ================== //
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 4,
          nav: true,
          loop: true
        }
      }
    });
  });



  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper('.slides-2', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });



   /**
   * Init swiper slider with 3 slides at once in desktop view
   */
   new Swiper('.slides-3', {
    speed: 600,
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

// ================== Animation Js ======================//

new WOW().init();


// ==================================//

/**
   * Easy on scroll event listener 
   */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}