// Add checked sign to chassis colour

$('#colours__choice i').on('click', function () {
    $(this).siblings().removeClass('fa-check-circle')
    $(this).siblings().addClass('fa-circle')
    $(this).removeClass('fa-circle');
    $(this).addClass('fa-check-circle');
})

// Change pictures
function appendImageMetalicious() {
    document.getElementById("carImg").src = "img/swatch/Metalicious.png";
}

function appendImageRed() {
    document.getElementById("carImg").src = "img/swatch/Red.webp";
}

function appendImageSilver() {
    document.getElementById("carImg").src = "img/swatch/Silver.webp";
}

function appendImageSolar() {
    document.getElementById("carImg").src = "img/swatch/Solar.webp";
}

function appendImageBlazerBlue() {
    document.getElementById("carImg").src = "img/swatch/BlazerBlue.webp";
}

function appendImageDeepImpactBlue() {
    document.getElementById("carImg").src = "img/swatch/DeepImpactBlue.png";
}

function appendImageBlack() {
    document.getElementById("carImg").src = "img/swatch/Black.png";
}

function appendImageGuard() {
    document.getElementById("carImg").src = "img/swatch/Guard.webp";
}

function appendImageMagnetic() {
    document.getElementById("carImg").src = "img/swatch/Magnetic.webp";
}