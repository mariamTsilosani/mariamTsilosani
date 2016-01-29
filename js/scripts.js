$(document).ready(function() {
    
     /*============================================
  Page Preloader
  ==============================================*/

    $('#home').height($(window).height()+50);

    
    //$('body').backstretch('img/computer.png');
     
      /* Shrink NavBar */
    $(window).scroll(function() {
       if ($(window).scrollTop() > $(window).height())
    { 
        $("#backToTop").css('visibility','visible');
        $('#backToTop').fadeIn('slow'); // Show "Scroll To Top" link.
    }
    else
    {
        $('#backToTop').fadeOut('slow'); // Hide "Scroll To Top" link.
    }


    if ($(window).scrollTop()< ($(window).height()-35)){
        $('nav').addClass('navbar-transparent');
        $('nav').removeClass('shrink');
        $('#main-nav').removeClass('pad');
        $('.icon-bar').removeClass('grayBar');
    }
    else{
      $('nav').addClass('shrink');
      $('nav').removeClass('navbar-transparent');
      $('#main-nav').addClass('pad');
      $('.icon-bar').addClass('grayBar');
    }
    });

    /* Header */
    $.backstretch('img/bannerFive.jpg');

    $(window).scroll( function() {
    var st = $(this).scrollTop(),
      wh = $(window).height(),
      sf = 1 + st/(10*wh);

      $('.backstretch img').css({
      'transform' : 'scale('+sf+')',
      '-webkit-transform' : 'scale('+sf+')'
    });

    $('#home .container').css({ 'opacity' : (1.6 - st/400) });

    if($(window).scrollTop() > ($(window).height()+50)){
      $('.backstretch').hide();
    }else{
      $('.backstretch').show();
    }

  });

    /* About Me */

     $("#aboutMe").click(function() {
         $('html, body').animate({
           scrollTop: parseInt($("#about").offset().top)
         }, 1700);
    });

    var controller;
    $(document).ready(function($) {

        if ($(window).width() > 769) {          
            // init controller
            controller = new ScrollMagic();
            // build scene
            var timelineheight = $('.timeline').outerHeight( true ) - 600;
            var scene = new ScrollScene({triggerElement: "#trigger1", duration: timelineheight, offset: 200})
                            .setPin("#pin1")
                            .addTo(controller);
        }
    });

     /* Skills */

     $("#skill").click(function() {
         $('html, body').animate({
           scrollTop: parseInt($("#skills").offset().top)
         }, 2000);
    });

    var colorval = $('.ring').css('backgroundColor');
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
    
    function elementInViewport(el) {
      var top = el.offsetTop;
      var left = el.offsetLeft;
      var width = el.offsetWidth;
      var height = el.offsetHeight;

      while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
      }

      return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
      );
    }

    var distance = $('.chart').offset().top - $(window).height() + 100,
    $window = $(window);

    $window.scroll(function() {
        if ( $window.scrollTop() >= distance ) {
            $('.chart').easyPieChart({
                animate: 2000,
                scaleColor: false,
                trackColor: '#fff',
                barColor: color,
                lineWidth: 14,
                size: 175,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

     /* ===== Contact Me ===== */

     $("#contactMe").click(function() {
         $('html, body').animate({
           scrollTop: parseInt($("#contact").offset().top)
         }, 2000);
    });

     /* === Contact Map ===*/


          google.maps.event.addDomListener(window, 'load', initialize);

          function initialize() {

            /* position Morristown */
            var latlng = new google.maps.LatLng(40.796645, -74.481934);

            var mapOptions = {
              center: latlng,
              scrollWheel: false,
              zoomControl : true,
              mapTypeControl: true,
              overviewMapControl: true,
              scrollwheel: false,
              zoom: 13
            };
            
            var marker = new google.maps.Marker({
              position: latlng,
              url: '/',
              animation: google.maps.Animation.DROP
            });
             
            var map = new google.maps.Map(document.getElementById("gmap"), mapOptions);
            marker.setMap(map);
          };
});
 
