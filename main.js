// Change subpages
$(document).ready(function () {
    var trigger = $('.custom__links ul a'),
        custom__content = $('#custom__content')
    custom__content.load('subpages/dimensions.html');

    trigger.on('click', function () {
        var $this = $(this),
            target = $this.data('target');
        console.log('subpages/' + target + '.html')
        custom__content.load('subpages/' + target + '.html');
        return false;
    })
})

// Add color to active subpage button

$('.custom__links ul a').on('click', function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})