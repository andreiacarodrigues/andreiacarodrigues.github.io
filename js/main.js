
function main() {

(function () {
   'use strict';

	// Hide .navbar bg first
    $('.navbar-custom').css('background', 'transparent');

	// Fade in .navbar bg
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar bg
			if ($(this).scrollTop() > 500) {
				/*$('.navbar').fadeIn();*/
                $('.navbar-custom').css('background', 'rgb(46, 46, 46)');
			} else {
                $('.navbar-custom').css('background', 'transparent');
				/*$('.navbar').fadeOut();*/
			}
		});
	});

    $('body').scrollspy({
        target: '#navbar',
        offset: 80
    });

	// Preloader */
	  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	});

   // Page scroll
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

  	// Portfolio Isotope Filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("top-btn").style.display = "block";
        } else {
            document.getElementById("top-btn").style.display = "none";
        }
    }

}());

}
main();

function email()
{
    var name = $('#contact #name').val();
    var mail = $('#contact #email').val();
    var message = $('#contact #message').val();

    if(name == "" || email == "" || message == "")
    {
        alert("All fields are required to send an email.");
        return;
    }

    $.ajax({
        method: "POST",
        url: "../actions/email.php",
        data: { name: name, email: mail, message: message }
    })
        .done(function( msg ) {
            if (msg == "ERROR") {
                alert("Error while trying to send email.");
            }
        });
}