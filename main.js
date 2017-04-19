var showNav = document.getElementById("show");
var responsiveNavbar = document.getElementById("responsive-navbar");
var close = document.getElementById("close");

show.addEventListener("click", function () {
  responsiveNavbar.style.display = "flex";
  document.getElementsByTagName("body")[0].style.height = "100%"
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
});

close.addEventListener("click", function () {
  responsiveNavbar.style.display = "none";
  document.getElementsByTagName("body")[0].style.height = ""
  document.getElementsByTagName("body")[0].style.overflow = "";
})
