$(document).ready(() => {
    $('#text').on('keyup', (event) => {
        $('.preview').html(event.currenTarget).val())
    })
});