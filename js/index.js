
let navbar = document.querySelector(".navbar")
let cangnav = document.querySelector(".navbar img")
$(".arrup").click(function(){

$("body,html").animate({scrollTop:"0"},1000)

})

$(".nav-link").css({color:"#fff"})
$(".arrup").fadeOut(100)
window.onscroll = function () {
 
  if (scrollY >= 600) {
    navbar.style.borderBottom="1px solid #666"
    navbar.classList.replace("bg-transparent","bg-white")
    $(".nav-link").css({color:"#000"})
    navbar.classList.replace("navbar-dark","navbar-light")
    cangnav.setAttribute("src","images/bakery-color.png")
    $(".arrup").fadeIn(100)
  }
  else {
    navbar.style.borderBottom="none"
    navbar.classList.replace("bg-white","bg-transparent")
    $(".nav-link").css({color:"#fff"})
    navbar.classList.replace("navbar-light","navbar-dark")
    cangnav.setAttribute("src","images/bakery-light-1.png")
    $(".arrup").fadeOut(100)
  }

}


$(".stara").fadeOut(5000, function () {

  $("body").css("overflow", "auto")
})


$(".btn").click(function () {

  $("html , body").animate({ scrollTop: "0" }, 2000)
})

$(".nav-link").click(function () {

  let selectsection = $(this).attr("href")

  let mytop = $(selectsection).offset().top
  $("html,body").animate({ scrollTop: mytop }, 1000)

})

let date =new Date();
let Sdate= date.getFullYear()
document.querySelector('.showDate').innerHTML=`Copyright ${Sdate}. All rights reserved.`;
$(document).ready(function(){
  $('.lodang-page').fadeOut(2000,()=>{
    $('body').css('overflow','auto')
  })
})