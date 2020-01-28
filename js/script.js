// caroussel slider

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3
}).mount()

// menu burger

$('#burger').on('click', function() {
    $('menu').toggleClass('menuVisi')
})

// rellax

var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

// fancybox

$('[data-fancybox="images"]').fancybox({
    afterLoad: function(instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

        if (pixelRatio > 1.5) {
            current.width = current.width / pixelRatio;
            current.height = current.height / pixelRatio;
        }
    }
});

// AOS

AOS.init();