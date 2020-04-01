$("body").prepend("<div id='nav-bar-container'></div>");
$("body").append(" <footer id='footer-container'></footer>");
$("#footer-container").load("footer.html");
if ($(window).width() <= 769) {
  $("#nav-bar-container").load("nav-bar-mobile.html");
  $.getScript("includes/navbarMobile.js");
} else {
  $("#nav-bar-container").load("nav-bar.html");
}

//DEBUG function
$(window).resize(function() {
  if ($(window).width() <= 768) {
    $(".nav-bar").remove();
    $("#nav-bar-container").load("nav-bar-mobile.html");
    $.getScript("includes/navbarMobile.js");
  } else {
    $("#nav-bar-container").load("nav-bar.html");
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= 30) {
    $(".nav-bar").addClass("nav-scroll");
  } else {
    $(".nav-bar").removeClass("nav-scroll");
  }
});
