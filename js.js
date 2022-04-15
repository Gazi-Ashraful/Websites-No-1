/*---back to top with smooth scroll---*/
var btn = $('#button');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {btn.addClass('show');} else {
btn.removeClass('show');}});
btn.on('click', function(e) {e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');});
/*---back to top with smooth scroll---*/



(function($) { "use strict";
$(".fa-bars").on('click', function () {
    $("body").addClass("about-on");
});

 $(".ass-1").on('click', function () {
     $("body").removeClass("about-on");
 });
 
 $(".fa-times").on('click', function () {
    $("body").removeClass("about-on");
    
});
})(jQuery);


