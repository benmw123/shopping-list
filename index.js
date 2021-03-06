//select the shopping form, when submited run function(event) to ammend shopping list. 
$('document').ready(function() {

    $('#js-shopping-list-form').on('submit', function(event) {
        //store dom element as text to append to list.
        let text = $('#shopping-list-entry').val();
            //apend the ul .shopping list with the necessary html using concatenation to add text.
            $('.shopping-list').append(
                '<li>'
                +'<span class="shopping-item">'+text+'</span>'
                    +'<div class="shopping-item-controls">'
                    +'<button class="shopping-item-toggle">'
                    +'<span class="button-label">check</span>'
                    +'</button>'
                    +'<button class="shopping-item-delete">'
                    +'<span class="button-label">delete</span>'
                    +'</button>'
                +'</div>'
            +'</li>');
            //resets shopping-list-entry after each sumbit.        
            $('#shopping-list-entry').val();
            $('#shopping-list-entry').val('');
            //prevents default form behavior. 
            event.preventDefault(); 
    }); 
    
    /*updated my code to include event delegation. I selected the parent element, 'shopping-list'
    this allows event listeners to be added to the new child elements*/
    $('.shopping-list').on('click', '.shopping-item-delete', function () {
        $(this).closest('li').remove(); 
    });

    $('.shopping-list').on('click', '.shopping-item-toggle',  function () {
        $(this).parents('li').children('span').toggleClass('shopping-item__checked');    
    });
    
});



