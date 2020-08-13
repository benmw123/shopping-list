//select the shopping form, when submited run function(event) to ammend shopping list. 
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

//need to figure out how to only select this.grandparent. 
$('.shopping-item-toggle').click(function() {
    $(this).closest('span.shopping-item').toggleClass('shopping-item__checked'); 
    
});   

//i also need to fix the padding on the appending shopping list item controls 
    
//delete an entry
$('.shopping-item-delete').click(function () {
    $(this).closest('li').remove(); 
});

