$(document).ready(function () {
    var trigger = $('.custom__links ul li a'),
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