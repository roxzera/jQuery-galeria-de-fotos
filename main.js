$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#button-reset').click(function() {
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const urlNewImage = $('#url').val();
        const newItem = $(`<li style = "display: none;"></li>`)
        $(`<img src="${urlNewImage}" />`).appendTo(newItem)
        $(`
            <div class="links">
            <a href="${urlNewImage}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
            </div>
        `).appendTo(newItem)
        $(newItem).appendTo(`ul`)
        $(newItem).fadeIn(1000)
        $('#url').val('')
    })  

})

