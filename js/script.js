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
        swipe: false
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
        if (step > 0) {
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
        } else if($('.q4:checked').length > 0 && step === 4){
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 4);
            step++;
            console.log(step);
        }
        else if($('.q5:checked').length > 0 && step === 5){
            $('.test_content_stages_items_wrapper').slick('slickGoTo', 5);
            step++;
            console.log(step);
        }


    switch (step) {
        case 2:
            $('.progress_bar_inner').css({'width': '14%'});
            percent.innerHTML = '14%';
            quest_num.innerHTML = '2';
            total_discount_count.innerHTML = '2000';
            break;
        case 3:
            $('.progress_bar_inner').css({'width': '29%'});
            percent.innerHTML = '29%';
            quest_num.innerHTML = '3';
            break;
        case 4:
            $('.progress_bar_inner').css({'width': '43%'});
            percent.innerHTML = '43%';
            quest_num.innerHTML = '4';
            break;
        case 5:
            $('.progress_bar_inner').css({'width': '58%'});
            percent.innerHTML = '58%';
            quest_num.innerHTML = '5';
            break;
        case 6:
            $('.progress_bar_inner').css({'width': '72%'});
            percent.innerHTML = '72%';
            quest_num.innerHTML = '6';
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
})
;
