$(function() {

   $('.rev_slider').slick({
    dots: true,
    arrows: true,
    infinite: false
   }) 

   $('.partners_slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 3
   })
   
   $('.packaging_slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3
   })

   $('.product_slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
   })
})