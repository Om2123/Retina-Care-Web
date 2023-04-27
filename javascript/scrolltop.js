


$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.fa-chevron-up').fadeIn();
        } else {
            $('.fa-chevron-up').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.fa-chevron-up').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});