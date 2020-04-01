function validateForm() {
  var inpObj1 = document.getElementById("a1").value;
  var inpObj2 = document.getElementById("a2").value;
  var inpObj3 = document.getElementById("a3").value;
  var inpObj4 = document.getElementById("a4").value;    
  if (inpObj1 == "") {
   var x = document.getElementById("path");
      x.style.display = "block";
    return false;
        }
  if (inpObj2 == "") {
      var x = document.getElementById("path2");
      x.style.display = "block";
    return false;
  }
    if (inpObj3 != inpObj4 || inpObj3 == "") {
    var x = document.getElementById("path3");
    x.style.display = "block";
    return false;
  }
}
//self invokating animation:-----------------------------------------------------
(function(){
    $(".just1").animate({left: '38%',
                         opacity: '1',
                         height: '450px',
                         height: '400px',
                         width: '300px'
                        }, 900);
})();
//alerts:-----------------------------------------------------
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
//counter 1:----------------------------------------------------------------------
var countDownDate = new Date("Jan 5, 2020").getTime();

var countdownfunction = setInterval(function() {

var now = new Date().getTime();
  
var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("counter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);
//counter 2:----------------------------------------------------------------------
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var countdownfunction = setInterval(function() {

var now = new Date().getTime();
  
var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("counter2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("counter2").innerHTML = "EXPIRED";
  }
}, 1000);
//counter 3:----------------------------------------------------------------------
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var countdownfunction = setInterval(function() {

var now = new Date().getTime();
  
var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("counter3").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("counter3").innerHTML = "EXPIRED";
  }
}, 1000);
//counter 4:---------------------------------------------------------------------
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var countdownfunction = setInterval(function() {

var now = new Date().getTime();
  
var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("counter4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("counter4").innerHTML = "EXPIRED";
  }
}, 1000);