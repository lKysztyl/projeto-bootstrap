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

    $('#pizzas, #hamburguers, #bebidas').find('.card').attr('data-bs-toggle', 'modal');
    $('#pizzas, #hamburguers, #bebidas').find('.card').attr('data-bs-target', '#modal');

    $('#pizzas, #hamburguers, #bebidas').find('.card').on('click', function() {
        const card_title = $(this).find('.card-title').text();
        const card_text = $(this).find('.card-text').first().text();
        const card_price = $(this).find('.card-price').text();

        $('#form-modal').find('.card-title').text(card_title);
        $('#form-modal').find('.card-text').first().text(card_text);
        $('#form-modal').find('.card-price').text(card_price);

        const picture = $(this).find('picture').first();
        const patchClone = picture.clone();
        $('.col-xl-5').last().append(patchClone);

        if ($('.modal-body').find('.order-1 > picture').length > 1) {
            $('.modal-body').find('.order-1').find('picture:first-child').remove();
        };

        if (window.screen.width <= 991) {
            if (window.screen.width <= 400) {
                let source = $('.order-1 > picture').find('source').eq(3);
                let srcset = source.attr('srcset');
                console.log(srcset)
                srcset = srcset.replace('250x200', '400x200');
                source.attr('srcset', srcset);

            } else if (window.screen.width <= 767) {
                let source = $('.order-1 > picture').find('source').eq(3);
                let srcset = source.attr('srcset');
                srcset = srcset.replace('250x200', '950x300');
                source.attr('srcset', srcset);

            } else if (window.screen.width <= 991) {
                let source = $('.order-1 > picture').find('source').eq(2);
                let srcset = source.attr('srcset');
                srcset = srcset.replace('350x350', '1050x250');
                source.attr('srcset', srcset);
            };
        };
    });

    $('#form-modal').submit(function(e) {
        e.preventDefault();

        let storeCard = $('.modal-body > .card').clone();

        $('.offcanvas-body').append(storeCard);

        $('#modal').modal('hide');

        $('.offcanvas-body').find('.card').addClass('mb-2');
        $('.offcanvas-body').find('.card-body > .card-text').remove();
        $('.offcanvas-body').find('.form-floating').remove();

        $('.offcanvas-body').find('.card-body').addClass('p-0 pt-1 ps-2');
        $('.offcanvas-body').find('.card-footer').addClass('p-0 ps-2').removeClass('py-xl-3');

        let storeLength = $('.offcanvas-body > .card');
        $('.btn-store').text(storeLength.length);

        if (window.screen.width >= 992) {
            $('#toastEnd').toast('show');
        };

    });
});