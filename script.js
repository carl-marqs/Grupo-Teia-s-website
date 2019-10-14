function openMenu() {
  document.getElementById("side-menu").style.width = "250px";
}

function closeMenu() {
  document.getElementById("side-menu").style.width = "0";
}

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll <= 10) {
    $("#header").addClass("transparent");
    $("#side-menu").addClass("links-height-fix");
    $("#closebtn").addClass("cross-height-fix");
  } else {
    $("#header").removeClass("transparent");
    $("#side-menu").removeClass("links-height-fix");
    $("#side-menu #closebtn").removeClass("cross-height-fix");
  }
});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top-vh(9)+1
      }, 800, function(){});
      closeMenu();
    }
  });
});

function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function parallax() {
	var $slider = document.getElementById("slider");

	var yPos = window.pageYOffset / $slider.dataset.speed;
	yPos = -yPos;

	var coords = '40% '+ yPos + 'px';

	$slider.style.backgroundPosition = coords;
}

window.addEventListener("scroll", function(){
	parallax();
});
