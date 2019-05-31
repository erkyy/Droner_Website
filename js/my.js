$(document).ready(function () {
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        auto: true,
    });
    $('.menu-togglr').on('click', function () {
        $('#mainav').slideToggle('fast');
        $(this).toggleClass('active');
    });
});

$( "#buttonSubmit" ).click(function() {
console.log('fire')
globalCartArray.name = this.value
sessionStorage.setItem('myArray', globalCartArray);
console.log(globalCartArray)
});