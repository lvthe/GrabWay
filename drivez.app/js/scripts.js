$(document).ready(function(){function caculateVideoHeight(){const ratio=560/315;const trailer=$("#trailer");console.log(trailer.width);trailer.height(parseInt(trailer.width())/ratio);}
caculateVideoHeight();$(window).resize(function(){caculateVideoHeight();})
AOS.init();var swiper=new Swiper(".swiper-team",{slidesPerView:5,spaceBetween:20,mousewheel:true,grabCursor:true,initialSlide:0,loop:true,centeredSlides:false,breakpoints:{320:{slidesPerView:1.2},480:{slidesPerView:1.2,},640:{slidesPerView:1.2,},768:{slidesPerView:2.2,},1024:{slidesPerView:3.2,},1440:{slidesPerView:4.5,},1700:{slidesPerView:4.5,},}});var swiper=new Swiper(".nftSlider",{watchSlidesProgress:true,slidesPerView:3,loop:true,spaceBetween:-35,centeredSlides:true,navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},breakpoints:{320:{slidesPerView:1,},480:{slidesPerView:1,},640:{slidesPerView:3,},768:{slidesPerView:3,},1024:{slidesPerView:3,},1440:{slidesPerView:3,},1700:{slidesPerView:3,},}});var swiper=new Swiper(".appSlider",{watchSlidesProgress:true,slidesPerView:5,loop:true,spaceBetween:-20,centeredSlides:true,navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},breakpoints:{320:{slidesPerView:1,},480:{slidesPerView:2,},640:{slidesPerView:3,},768:{slidesPerView:3,},1024:{slidesPerView:4,},1440:{slidesPerView:5,},1700:{slidesPerView:5,},}});$(".btn-menu").click(function(){$("body").addClass("menu-show");})
$(".btn-close-menu").click(function(){$("body").removeClass("menu-show");});$(".btn--close-menu").click(function(){$("body").removeClass("menu-show");});});