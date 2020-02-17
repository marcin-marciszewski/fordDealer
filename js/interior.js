// Add checked sign to interior option

$('#interior__content .interior-card i').on('click', function () {
    $(".far").removeClass('fa-check-square')
    $(".far").addClass('fa-square')
    $(this).removeClass('fa-square');
    $(this).addClass('fa-check-square');
})