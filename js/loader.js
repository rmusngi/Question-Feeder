$(function () {
    $(".brainly-questions").slice(0, 5).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".brainly-questions:hidden").slice(0, 5).slideDown();
        if ($(".brainly-questions:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});



$(document).ready(function() {
    setTimeout(function(){
    $('.footer-count').fadeIn(1000);
    }, 1000);
});