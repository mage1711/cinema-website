function openBranch(event, branch) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(branch).style.display = "block";
  evt.currentTarget.className += "active";
}


document.getElementById("defaultOpen").click();


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myButton").style.display = "block";
  } else {
    document.getElementById("myButton").style.display = "none";
  }
}


function BackToTop() {
  document.documentElement.scrollTop = 0;
}