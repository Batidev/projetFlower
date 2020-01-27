new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3
}).mount()



var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});