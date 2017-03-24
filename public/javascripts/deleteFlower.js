/**
 * Created by go1018bx on 3/23/2017.
 */
/**
 * Created by go1018bx on 3/23/2017.
 */
$(function(){
    $("#editableColor").click(function() {
        // If there is no color input on the page, create and add one
        if ($('#newcolor').length == 0) {
            addInput($(this));
        }
    });



});

// Add an input text field, after the color.
// Add instructions, and event handler for Enter key.
function addInput(element) {
    var input = '<input id="newcolor" placeholder="New color"/>';
    element.append(input);
    $('#instructions').text('Press Enter to save, Esc to quit');

    $('#newcolor').keypress(function (event) {
        if (event.which == 13) {     // Keycode for Enter
            var color = $(this).val();
            var name = $('#name').text();
            var data = { "color": color, "name": name };

            $.ajax({method:"PUT",
                data:data,
                url:'/deleteFlower'})
                .done(function(result){
                    $('#editableColor').text(result.color);
                    removeInput();
                })
                .fail(function(err){
                    console.log(err);
                    removeInput();
                })
        }
    });
}

function removeInput(){
    $('#instructions').text(' (click color to edit)');
    $('#newcolor').remove();
}