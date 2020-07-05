$(document).ready(function() {
    $(window).scroll(function() {
        var pos_body = $('html,body').scrollTop();
        if (pos_body > 55) {
            $('.menu').addClass('fixed-top');
            $('.menu').attr('style', 'background-color:white ;');
        } else if (pos_body <= 56) {
            $('.menu').removeClass('fixed-top');
            $('.menu').removeAttr('style', 'background-color:white ;');
        }
    });
    $('.menutop .nav-item').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    });
});