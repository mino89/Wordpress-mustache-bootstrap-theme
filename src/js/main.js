import '../../node_modules/jquery/dist/jquery.js'
import '../../node_modules/bootstrap/js/dist/util.js'
import '../../node_modules/bootstrap/js/dist/carousel.js'
import "../scss/styles.scss"
// import 'scrollLock.js'
// global variables
// var headerHeight;
// var scrollDistance;
// reset margin top to adapt header height
// function resizeMarginTop() {
//     headerHeight = $('header').outerHeight();
//     if (!$('.header-clone').length){
//         $('body').prepend('<div class="header-clone"></div>');
//     }
//     setTimeout(function () {
//         $('.header-clone').css({
//             height: headerHeight
//         })
//     }, 100);
// }

// // anchor animation scroll
// function scrollToAnchor(element,event){
//     element.click(function(event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 500);
//     }) 
// }

// // header compression effect
// function headerCompression(){
//     var scrollDistance = $(this).scrollTop();
//     if (scrollDistance >= headerHeight){
//         $('.logo').children('img').addClass('compressed');
//         headerHeight = $('header').outerHeight();
//         resizeMarginTop() 
//     }else{
//         $('.logo').children('img').removeClass('compressed');
//         setTimeout(function () {
//             headerHeight = $('header').outerHeight();
//             resizeMarginTop();
//         }, 100);
        
//     }
// }

// // toggle mobile navigation
// function togglenav(baseHeight){
//     $('.hamburger').click(function(){
//         $(this).toggleClass('opened');
//         var target = $(this).parent().parent().children('nav').children('ul')
//         $('header').toggleClass('opened');
//         if(!target.hasClass('opened')){
//             $.scrollLock(true)
//             target.addClass('opened');
//             setTimeout(function () {
//                 target.find('li').each(function (i) {
//                     setTimeout(function () {
//                         target.find('li').eq(i).addClass('opened')
//                     }, i * 100);
//                     clearTimeout();
//                 }, 200);
//             });
//         }else{
//             $.scrollLock(false)
//             setTimeout(function () {
//                 target.removeClass('opened');
//                 target.find('li').removeClass('opened')
//                 clearTimeout();
//             }, 400);
//             total = target.find('li').length
//             target.find('li').each(function (i) {
//                 setTimeout(function () {
//                     target.find('li').eq(total - i).removeClass('opened')
//                 }, i * 100);
//             });
//             $('.header-clone').removeAttr('style').css({
//                 height: baseHeight
//             })
//             console.log(baseHeight + ',' + headerHeight)

//         }
//     })
// }

// function resetNav(){
//         $('header').removeClass('opened');
//         $('header ul').removeClass('opened');
//         $('header ul li').removeClass('opened');
//         $('header ul li').removeClass('opened');
//         $('.hamburger').removeClass('opened');
//         $.scrollLock(false)
//         resizeMarginTop();
// }

// function collapse(el,target){
//     $(el).click(function(){
//         if ($(this).siblings(target).hasClass('opened')) {
//             $(this).text('more')
//         } else {
//             $(this).text('less')
//         }
//         $(this).siblings(target).toggleClass('opened');
//     })
// }

// function updateOnChange(){
//     $(".update_on_change").change(function () {
//         $("#update_selection").submit();
       
//     });
// }


// //set cookie function
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
// }

// //get cookie function
// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0; i<ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1);
//         if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
//     }
//     return "";
// }



// function acceptCookies(){
//     setCookie('hide-cookie-box','hidden',30);
//     $('.cookie-box').addClass('hide-swipe');
// }

// $(document).ready(function() {
//     var hideCookieBox = getCookie('hide-cookie-box');


//     if(hideCookieBox != 'hidden'){
//         $('.cookie-box').addClass('visible');
//         setTimeout(function(){
//         $('.cookie-box').addClass('show-swipe');
//         },500);
//     }

    


//     $('.car-carousel').children('.carousel-item').first().addClass('active')
//     $('#room-gallery').children('.carousel-item').first().addClass('active')

//     var loadHeaderHeight = $('header').outerHeight();
//     headerCompression();
//     resizeMarginTop();
//     scrollToAnchor($('.anchor-scroll'),event);
//     togglenav(loadHeaderHeight)
//     $(window).resize(function () {
//         resetNav();
//         headerCompression();        
//     })
//     $(window).scroll(function(){
//         if(!$('header ul').hasClass('opened')){
//             headerCompression();
//         }
//     })
//     collapse('.collapseText','.collapseBox')
//     $('#check_in').datepicker({
//         autoHide: true,
//         dateFormat: 'mm-dd-yyyy',
//         trigger: '.trigger-calendar'
//     });
//     $('#check_in_side').datepicker({
//         autoHide: true,
//         inline:true,
//         dateFormat: 'mm-dd-yyyy',
//         container: '.datepicker-inside'
//     });
//     // updateOnChange();
//     var options = {
//         controlsClass: 'blueimp-gallery-controls',
//         // Toggle the controls on pressing the Return key:
//         toggleControlsOnReturn: false,
//         // Toggle the controls on slide click:
//         toggleControlsOnSlideClick: false,
//     }
//     for (i = 0; i < 200; i++) {
//         if (document.getElementById('links_'+i)){
//         document.getElementById('links_'+i).onclick = function (event) {
//             event = event || window.event;
//             var target = event.target || event.srcElement,
//                 link = target.src ? target.parentNode : target,
//                 options = { index: link, event: event },
//                 links = this.getElementsByTagName('a');
//             blueimp.Gallery(links, options);
//         };
//         }
//     }

// })




// function SortMe(where, __which) {
//     valore = document.getElementById(__which).value;
//     document.location.href = where + "&h=" + valore;
// }


