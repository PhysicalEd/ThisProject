$(document).ready(function () {
    //$('#fullpage').fullpage({
    //    navigation: true,
    //    sectionSelector: '.section',
    //    navigationPosition: 'right',
    //    scrollOverflow: true,
    //    anchors: ['life', 'skills'],
    //    fadingEffect: true,
    //    autoScrolling: true,
    //    onLeave: function (origin, destination, direction) {
    //        if (destination.index == 0) {
    //            $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background', 'white');
    //        }

    //        if (destination.index != 0) {
    //            $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background', '#333');
    //        }
    //    },
    //    afterLoad: function (origin, destination, direction) {

    //        if (origin !== null && origin.index === 0) {
    //        }
    //    }
    //});
    $('#project-1-img').on({
        mouseenter: function () {
            $('#project-1-desc').css('visibility', 'visible');
        },
        mouseleave: function () {
            $('#project-1-desc').css('visibility', 'hidden');

        }
    });

    // WOrking
    //var delay = 100;
    //$('progress').each(function (index, el) {
    //    setTimeout(function() {
    //        var progressVal = 0;
    //        var timer = setInterval(function() {
    //                progressVal += 1;
    //                $(el).val(progressVal);
    //                if (progressVal == 95) {
    //                    //$(el).addClass('shake');
    //                    clearInterval(timer);
    //                }
    //            },
    //            5);
    //    }, delay);
    //    delay += 100;
    //});

    //Div working
    var delay = 100;
    $('.myprogress').each(function (index, el) {
        setTimeout(function () {
            var progressVal = 0;
            var timer = setInterval(function () {
                progressVal += 1;
                var progressValDesc = progressVal + '%';
                $(el).css('width', progressValDesc);
                    $(el).html(progressValDesc);
                    if (progressVal == 100) {
                        $(el).addClass('shake');
                        clearInterval(timer);
                    }
                },
                5);
        }, delay);
        delay += 100;
    });





    $('.counter').hide();
    var s = $('#section1').scrollTop();
    $('#showme').on('click', function() {
        $('.myprogress').fadeOut('slow', RenderSkillsInYears);
//        RenderSkillsInYears();


    });

    $('#MyLifeStory').on('click', function() {
        $.fn.fullpage.moveTo('skills', 1);

    })
});


function RenderSkillsInYears() {
    $('.myprogress').removeClass('shake');
    // Years working
    var delay = 100;
    $('.myprogress').each(function (index, el) {
        setTimeout(function () {
            var progressVal = 0;
            var numberOfYears = $(el).attr('data-years');
            var totalYears = 7;
            var timer = setInterval(function () {
                    progressVal += 1;
                    var progressValDesc = progressVal + '%';
                    $(el).css('width', progressValDesc);
                    $(el).html(numberOfYears + " yrs");
                    if (progressVal >= (numberOfYears * 100) / totalYears) {
                        //$(el).addClass('shake');
                        clearInterval(timer);
                    }
                },
                5);
        }, delay);
        delay += 100;
    });
}
