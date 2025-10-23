// Initialize the Bootstrap Carousel
const carousel = document.querySelector('#imageCarousel');
if (carousel) {
    new bootstrap.Carousel(carousel, {
        interval: 5000,
        wrap: true
    });
}
