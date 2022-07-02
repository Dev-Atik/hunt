$(function () {
    // menu fixed start

 var navoff = $('.navbar').offset().top;
 
  $(window).scroll(function(){
   var scrolling = $(this).scrollTop();

    if(scrolling > navoff){
      $('.navbar').addClass('menu_fix');
    }
    else{
      $('.navbar').removeClass('menu_fix');
    }

  })

  // bnanner slider start

  $('.main-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    nextArrow: '.nxt_arrow',
    prevArrow: '.prev_arrow',
    fade: true,
    speed: 1500,
  });
  // bnanner slider end

  // service slider start
  $('.main_serv').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.top_btn',
    nextArrow: '.bottom_btn',
    vertical: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
    ]
  });
  // service slider end

  // comment slider start
  $('.main_img_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.c_top_btn',
    nextArrow: '.c_bottom_btn',
    vertical: true,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.main_c_slider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
    ]
  });
  $('.main_c_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: true,
    asNavFor: '.main_img_slider'
  });
  // comment slider end
  //  portfolio area start
  // venubox
  VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'swing'
  });
    // // priceing slider
    $('.priceing_wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      speed: 1500,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
      ]
    });
    // priceing end

  // counter up 

  $('.counter').counterUp({
    delay: 30,
    time: 2000,
  });

  //  team slider
  $('.team_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    speed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },     
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  //  team end

  // brand slider
  $('.brands_wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });

  // ---------------- reaponsive area start -----------
    $('.show').on('click', function(){
      $('.sidebar').css('left','0px')
    })

    $('.cross').on('click', function(){
      $('.sidebar').css('left','-100%')
    })
})