/**
 * Bootstrap Fancy Fixed Scroll Nav
 * --------------------------------
 * A bootstrap.js plugin to hide scroll bar and fade in after masthead.
 *
 * Author: David Lemayian
 * Organisation: Code for Africa */

(function ($) {
    $(document).ready(function () {

        // hide .navbar first
        $(".navbar").hide();

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {

                // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() > $(".masthead").outerHeight(true)) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        });

    });
}(jQuery));
