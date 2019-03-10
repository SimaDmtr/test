$(document).ready(function () {
    let step = 1;
    var percent = document.getElementById('percent');
    var quest_num = document.getElementById('quest_num');
    var total_discount_count = document.getElementById('total_discount_count');
    var check = document.querySelector('#no');

    $('.test_content_stages_items_wrapper').slick({
        arrows: false,
        infinite: false,
        draggable: false,
        swipe: false,
        adaptiveHeight: true
    });
    $('.test-slider__input').click(function (evt) {
        if (check.checked) {
            document.getElementById('sum').disabled = true;
            $('.test_content_scroll_inner').css({"pointer-events": "none"});
            document.getElementById('sum').value = 0;
        } else {
            document.getElementById('sum').disabled = false;
            $('.test_content_scroll_inner').css({"pointer-events": "auto"});
        }
    });


    $('.test_slide_buttons_prev').on("click", function () {
        if (step > 1) {
            $('.test_content_stages_items_wrapper').slick("slickPrev");
            step--;
        }
    });

    $('.test_slide_buttons_next').on("click", function () {
        if ($('.q1:checked').length > 0 && step === 1) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 1);
            step++;
            console.log(step);
        } else if ($('.q2:checked').length > 0 && step === 2) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 2);
            step++;
            console.log(step);
        } else if ((check.checked || document.getElementById('sum').value > 0) && step === 3) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 3);
            step++;
            console.log(step);
        } else if ($('.q4:checked').length > 0 && step === 4) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 4);
            step++;
            console.log(step);
        } else if ($('.q5:checked').length > 0 && step === 5) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 5);
            step++;
            console.log(step);
        } else if ($('.q6:checked').length > 0 && step === 6) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 6);
            step++;
            console.log(step);
        }


        switch (step) {
            case 2:
                $('.progress_bar_inner').css({'width': '29%'});
                percent.innerHTML = '29%';
                quest_num.innerHTML = '2';
                total_discount_count.innerHTML = '2000';
                break;
            case 3:
                $('.progress_bar_inner').css({'width': '43%'});
                percent.innerHTML = '43%';
                quest_num.innerHTML = '3';
                break;
            case 4:
                $('.progress_bar_inner').css({'width': '58%'});
                percent.innerHTML = '58%';
                quest_num.innerHTML = '4';
                break;
            case 5:
                $('.progress_bar_inner').css({'width': '72%'});
                percent.innerHTML = '72%';
                quest_num.innerHTML = '5';
                break;
            case 6:
                $('.progress_bar_inner').css({'width': '86%'});
                percent.innerHTML = '86%';
                quest_num.innerHTML = '6';
                break;
            case 7:
                $('.progress_bar_inner').css({
                    'width': '100%',
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                });
                percent.innerHTML = '100%';
                quest_num.innerHTML = '7';
                $('.test_slide_buttons').css({"display": "none"});
                $('.slick-track').css({
                    "padding-bottom": "0px"
                });
                break;
        }
    });
    $('#skip').click(function () {
        if (step === 1) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 1);
            step++;
            console.log(step);
        } else if (step === 2) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 2);
            step++;
            console.log(step);
        } else if (step === 3) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 3);
            step++;
            console.log(step);
        } else if (step === 4) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 4);
            step++;
            console.log(step);
        } else if (step === 5) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 5);
            step++;
            console.log(step);
        } else if (step === 6) {
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 6);
            step++;
            console.log(step);
        }
        switch (step) {
            case 2:
                $('.progress_bar_inner').css({'width': '29%'});
                percent.innerHTML = '29%';
                quest_num.innerHTML = '2';
                total_discount_count.innerHTML = '2000';
                break;
            case 3:
                $('.progress_bar_inner').css({'width': '43%'});
                percent.innerHTML = '43%';
                quest_num.innerHTML = '3';
                break;
            case 4:
                $('.progress_bar_inner').css({'width': '58%'});
                percent.innerHTML = '58%';
                quest_num.innerHTML = '4';
                break;
            case 5:
                $('.progress_bar_inner').css({'width': '72%'});
                percent.innerHTML = '72%';
                quest_num.innerHTML = '5';
                break;
            case 6:
                $('.progress_bar_inner').css({'width': '86%'});
                percent.innerHTML = '86%';
                quest_num.innerHTML = '6';
                break;
            case 7:
                $('.progress_bar_inner').css({
                    'width': '100%',
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                });
                percent.innerHTML = '100%';
                quest_num.innerHTML = '7';
                $('.test_slide_buttons').css({"display": "none"});
                $('.slick-track').css({
                    "padding-bottom": "0px"
                });
                break;
        }
    });
    var $range = $("#slider"),
        $input = $("#sum"),
        min = 0,
        max = 1000,
        instance;

    $range.ionRangeSlider({
        grid_num: 7,
        min: min,
        max: max,
        grid: true,
        hide_min_max: true,
        hide_from_to: true,
        onStart: function (data) {
            $input.prop("value", data.from);
        },
        onChange: function (data) {
            $input.prop("value", data.from);
        }
    });
    instance = $range.data("ionRangeSlider");
    $input.on("change keyup", function () {
        var val = $(this).prop("value");
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }
        instance.update({
            from: val
        });
    });

    $("[name=\"mask\"]").mask("+375 99-999-99-99");
    $('.last_slide_button').click(function (e) {
        e.preventDefault()
        if ($('.q7:checked').length > 0) {
            if ($('#mask:valid').length > 0) {
                $('.confirm_popup').css({
                    "opacity": "1",
                    "visibility": "visible"
                })
                $('#mask').css({
                    "border-color": "green"
                })
                document.getElementById('q7_1').disabled = true;
                document.getElementById('q7_2').disabled = true;
                document.getElementById('q7_3').disabled = true;
                document.getElementById('q7_4').disabled = true;
                document.getElementById('mask').disabled = true;
            } else {
                $('#mask').css({
                    "border-color": "red"
                })
            }
        } else {
            $('.last_slide .check').css({
                "border-color": "red"
            })
            $('.last_slide .label_wrapper').click(function () {
                $('.last_slide .check').css({
                    "border-color": "#999999"
                })

            })

        }
    })
    $('.confirm_popup_close').click(function () {
        $('.confirm_popup').css({
            "opacity": "0",
            "visibility": "hidden"
        })
    })
    $('.icon-quest').mousemove(function (e) {
        var elemWidth = $('.quest2 .test_content_stages_elem').width();
        var X = e.pageX;
        var Y = e.pageY;
        var top = Y + 40 + 'px';
        var left = X - elemWidth + 'px';
        var width = elemWidth * 2 + 'px';
        var id = $(this).data('tooltip');
        $('#tip-' + id).css({
            display: "flex",
            top: top,
            left: left,
            width: width
        });
    });
    $('.icon-quest').mouseout(function () {
        var id = $(this).data('tooltip');
        $('#tip-' + id).css({
            display: "none"
        });
    });
    $('.menu-wrap').click(function () {
        $('.header_nav').toggleClass('active')
    })
    $(document).mouseup(function (e) {
        var container = $(".header_nav ul");
        if (container.has(e.target).length === 0) {
            $('.header_nav').removeClass('active');
        }
    });
    $('.header_row_call_img').click(function () {
        $('.header_row_call_numbers').toggleClass('active')
    })
    $(document).mouseup(function (e) {
        var container = $(".header_row_call_numbers");
        if (container.has(e.target).length === 0) {
            $('.header_row_call_numbers').removeClass('active');
        }
    });
    $('.fixed_bar .label').click(function () {
        $('.fixed_bar').toggleClass('active')
    })
    $(document).mouseup(function (e) {
        var container = $(".fixed_bar");
        if (container.has(e.target).length === 0) {
            $('.fixed_bar').removeClass('active');
        }
    });
});
