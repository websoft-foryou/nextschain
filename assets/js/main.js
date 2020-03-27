var show_button = false;
$(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        $('.category_allmenu').hide();
        $('.category_submenu').hide();
        $('.btn_import_list_group').hide();

        $('.category_allmenu li a').click(function() {
            alert('clicked');
            $(".category_allmenu" ).slideToggle();
        });

        $('.category_submenu li a').click(function() {
            alert('clicked');
            $(".category_submenu" ).slideToggle();
        })

        $('.category_list .category_tile').click(function() {
            if ($(this).attr('tile_type') == 'more_category') {
                if ($(".category_submenu").is(":visible") == true)
                    $(".category_submenu").slideToggle();
                $(".category_allmenu").slideToggle();
            }
            else {
                if ($(".category_allmenu").is(":visible") == true)
                    $(".category_allmenu").slideToggle();
                if ($(".category_submenu").is(":visible") == true)
                    $(".category_submenu").slideToggle();
                $(".category_submenu").slideToggle();
            }
        })

        $('.card').hover(function(e) {
            if (show_button == true) return;
            show_button = true;
            $(this).find('.btn_import_list_group').show("show");
            $(this).css('opacity', '0.7');
        })

        $('.card').mouseleave(function(e) {
            if (show_button == false) return;
            show_button = false;
            $(this).find('.btn_import_list_group').hide("fast");
            $(this).css('opacity', '1');
        })
    });

   

});