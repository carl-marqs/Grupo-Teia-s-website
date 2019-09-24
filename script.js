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
  } else {
    $("#header").removeClass("transparent");
  }
});
