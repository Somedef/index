var menu = ['HOME', 'PROJECT 01', 'PROJECT 02', 'CONTACT'];
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 60,
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