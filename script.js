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
        const card_text = $(this).find('.card-text').first().text();
        const card_price = $(this).find('.card-price').text();

        $('#form-modal').find('.card-title').text(card_title);
        $('#form-modal').find('.card-text').first().text(card_text);
        $('#form-modal').find('.card-price').text(card_price);

        const picture = $(this).find('picture').first();
        const patchClone = picture.clone();
        $('.card-text').last().append(patchClone);

    });

    $('#form-modal').on('click', function() {

    });
});