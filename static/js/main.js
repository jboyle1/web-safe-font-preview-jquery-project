$(document).ready(() => {
    $('#text').on('keyup', (event) => {
        $('.preview').html($(event.currentTarget).val());
    });

    $('#font').on('change', (event) => {
        
    })
});