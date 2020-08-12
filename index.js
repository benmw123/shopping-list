
$('#js-shopping-list-form').on('submit', function(event) {
        let text = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li> <span class="shopping-item">' + text + '</span> </li>');
        event.preventDefault(); 
});    

    
    


