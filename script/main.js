var menu = ['HOME', 'PROJECT 01', 'PROJECT 02', 'ABOUT', 'CONTACT'];
var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    }
});
// 페이징커스텀