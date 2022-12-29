let first_time = true;
let story_index = 0;

$(document).ready(function () {
    $('#home_page').click(function () {
        if (first_time) {
            $('header').fadeIn(200);
            first_time = false;
        }
    });
    $(window).scroll(function () {
        if (first_time) {
            if ($(window).scrollTop()) {
                $('header').fadeIn(200);
                first_time = false;
            }
        }
        if ($(window).scrollTop()) {
            if (!$('.top_btn').is(':animated')) {
                $('.top_btn').fadeIn(200);
            }
        }
        else {
            if (!$('.top_btn').is(':animated')) {
                $('.top_btn').fadeOut(200);
            }
        }
    });
    $('.nav_list_btnarea').click(function () {
        $('.nav_list').fadeToggle(200);
        $('.list_btn_box').toggleClass('list_open');
    });
    $('.character_min').click(function () {
        $(this).children('img').fadeToggle(200);
        $(this).parents('.character').children('.character_detail').slideToggle(200);
    });
    $('.right_btn').click(function () {
        $('.story_counter span:nth-child(' + (story_index + 1) + ')').css({ 'width': '5px', 'background-color': '#ccc' });
        story_index = (story_index + 1) % 4;
        $('.story_content_item').css('transform', 'translateX(' + -100 * story_index + '%)');
        $('.story_counter span:nth-child(' + (story_index + 1) + ')').css({ 'width': '30px', 'background-color': '#fff' });
    });
    $('.left_btn').click(function () {
        $('.story_counter span:nth-child(' + (story_index + 1) + ')').css({ 'width': '5px', 'background-color': '#ccc' });
        story_index = (story_index + 3) % 4;
        $('.story_content_item').css('transform', 'translateX(' + -100 * story_index + '%)');
        $('.story_counter span:nth-child(' + (story_index + 1) + ')').css({ 'width': '30px', 'background-color': '#fff' });
    });
});