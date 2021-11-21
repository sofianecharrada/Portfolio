$(document).ready(function(){



    
ScrollReveal().reveal('#menu',{easing: 'ease-in-out', distance:'10px', origin:'left',duration:'1600',  });
ScrollReveal().reveal('#presentation',{ easing: 'ease-in-out', distance:'20px', origin:'bottom',duration:'1600',  });
ScrollReveal().reveal('#productions',{ easing: 'ease-in-out', distance:'20px', origin:'left',duration:'1600',  });
ScrollReveal().reveal('#creations',{ delay:'600', easing: 'ease-in-out', distance:'20px', origin:'bottom',duration:'1600',  });
ScrollReveal().reveal('#contact',{ easing: 'ease-in-out', distance:'20px', origin:'right',duration:'1600',  });
ScrollReveal().reveal('#reseaux',{ delay:'600',easing: 'ease-in-out', distance:'20px', origin:'bottom',duration:'1600',  });
ScrollReveal().reveal('#remonter',{ delay:'600',easing: 'ease-in-out', distance:'20px', origin:'bottom',duration:'1600',  });
ScrollReveal().reveal('#artiste',{ delay:'600',easing: 'ease-in-out', distance:'20px', origin:'right',duration:'1600',  });
ScrollReveal().reveal('.content',{ delay:'600',easing: 'ease-in-out', distance:'20px', origin:'bottom',duration:'1600',  });
ScrollReveal().reveal('#photomontage',{ delay:'600',easing: 'ease-in-out', distance:'20px', origin:'right',duration:'1600',  });
ScrollReveal().reveal('#video',{ delay:'600',easing: 'ease-in-out', distance:'20px', origin:'right',duration:'1600',  });
ScrollReveal().reveal('#montage',{ delay:'600',easing: 'ease-in-out', distance:'20px', origin:'left',duration:'1600',  });


    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1600, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$('#remonter').click(function(){

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    });



});

$(function() {

	var owl = $('.owl-1');
    owl.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    var carousel_nav_a = $('.carousel-nav a');

    carousel_nav_a.each(function(slide_index){
        var $this = $(this);
        $this.attr('data-num', slide_index);
        $this.click(function(e) {
            owl.trigger('to.owl.carousel',[slide_index,1500]);
            e.preventDefault();
        })
    })

    owl.on('changed.owl.carousel', function(event) {
        carousel_nav_a.removeClass('active');
        $(".carousel-nav a[data-num="+event.item.index+"]").addClass('active');
    })

	
})


$(function() {

	var owl = $('.owl-2');
    owl.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    var carousel_nav2_a = $('.carousel-nav2 a');

    carousel_nav2_a.each(function(slide_index){
        var $this = $(this);
        $this.attr('data-num', slide_index);
        $this.click(function(e) {
            owl.trigger('to.owl.carousel',[slide_index,1500]);
            e.preventDefault();
        })
    })

    owl.on('changed.owl.carousel', function(event) {
        carousel_nav2_a.removeClass('active');
        $(".carousel-nav2 a[data-num="+event.item.index+"]").addClass('active');
    })

	
})



