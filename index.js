
$('#js-shopping-list-form').on('submit', function(event) {
        let text = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' + text + '</li>');
        event.preventDefault(); 
});    

    
    


