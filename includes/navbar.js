$("body").prepend("<div id='nav-bar-container'></div>");
$("body").append(" <footer id='footer-container'></footer>");
$("#footer-container").load("footer.html");
if ($(window).width() <= 768) {
  $(".nav-bar").remove();
  $("#nav-bar-container").load("nav-bar-mobile.html");
  $.getScript("navbarMobile.js");
} else {
  $("#nav-bar-container").load("nav-bar.html");
}

$(window).resize(function() {
  if ($(window).width() <= 768) {
    $(".nav-bar").remove();
    $("#nav-bar-container").load("nav-bar-mobile.html");
    $.getScript("navbarMobile.js");
  } else {
    $("#nav-bar-container").load("nav-bar.html");
  }
});

$(window).scroll(function() {
  //After scrolling 100px from the top...
  if ($(window).scrollTop() >= 30) {
    $(".nav-bar").addClass("nav-scroll");

    //Otherwise remove inline styles and thereby revert to original stying
  } else {
    $(".nav-bar").removeClass("nav-scroll");
  }
});
