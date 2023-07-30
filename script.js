$(document).ready(function() {
    function price() {
        const random = Math.random() * (120 - 45 + 1) + 45;
        const realNumber = Number(random.toFixed(2));
        const replaceString = realNumber.toFixed(2).replace(".", ",");
        const sifra = 'R$';
        return sifra + replaceString;
    };

    $('.card-price').each(function() {
        $(this).text(price());
    });

    $('.card').attr('data-bs-toggle', 'modal');
    $('.card').attr('data-bs-target', '#modal');

    $('.card').on('click', function(e) {
        const card_title = $(this).find('.card-title').text();

        $('#form-modal').find('.card-title').text(card_title);

    });

    $('#form-modal').on('click', function() {

    });
});