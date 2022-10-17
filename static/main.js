$('document').ready(function(){
    console.log('here')
    $('#calculator input[type=button]').click(function() {
        console.log('button')
        $('#result').val($(this).val())
    })
});