$(document).ready(function() {
    $('.popper').hover(function(e) {
        $("#pop").css({ left: (e.pageX + 20) + "px", top: (e.pageY + 20) + "px" });
        $('#pop').toggle();

    });
    $("#frozen2").hover(function(e) {
        $("#popperMN").html("Frozen 2");
        $("#popperIMDB").html(" IMDB : 7");
        $("#popperTickets").html("40 Available Tickets");
    });
    $("#badboysforlife").hover(function(e) {
        $("#popperMN").html("Bad Boys For Life");
        $("#popperIMDB").html(" IMDB : 7.4");
        $("#popperTickets").html("40 Available Tickets");
    });
    $("#theinvisibleman").hover(function(e) {
        $("#popperMN").html("The Invisible Man");
        $("#popperIMDB").html(" IMDB : 7.7");
        $("#popperTickets").html("40 Available Tickets");
    });
    $("#dolittle").hover(function(e) {
        $("#popperMN").html("Dolittle");
        $("#popperIMDB").html(" IMDB : 5.5");
        $("#popperTickets").html("40 Available Tickets");
    });

    $(".DoLittle").css({
        "background": "linear-gradient(to top,rgba(38, 38, 38) 0%,rgba(38, 38, 38) 0%,transparent 200%),url(Images/DolittleBackground.jpg)",
        "background-repeat": "no-repeat)",
        "background-size": "cover",
        "background-position": "50% 25%",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "1000px"
    });
    $(".BBFL").css({
        "background": "linear-gradient(to top,rgba(38, 38, 38) 0%,rgba(38, 38, 38) 0%,transparent 200%),url(Images/badboysofrlifebackground.jpg)",
        "background-repeat": "no-repeat)",
        "background-size": "cover",
        "background-position": "50% 25%",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "1000px"
    });
    $(".F2").css({
        "background": "linear-gradient(to top,rgba(38, 38, 38) 0%,rgba(38, 38, 38) 0%,transparent 200%),url(Images/frozen2background.jpg)",
        "background-repeat": "no-repeat)",
        "background-size": "cover",
        "background-position": "50% 25%",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "1000px"
    });
    $(".TIM").css({
        "background": "linear-gradient(to top,rgba(38, 38, 38) 0%,rgba(38, 38, 38) 0%,transparent 200%),url(Images/theinvisiblemanbackground.jpg)",
        "background-repeat": "no-repeat)",
        "background-size": "cover",
        "background-position": "50% 25%",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "1000px"
    });

});