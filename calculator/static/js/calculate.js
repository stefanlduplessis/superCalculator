$('document').ready(function() {
    $('#calculator').modal('show');
    let equation = [];
    $('#calculator input[type=button]').click(function() {
        let value = $(this).val();
        if(value === 'AC') {
            // cancel
            $('#result').val('')
            equation = [];
         } else if (/^\d+$/.test(value) || value==='.') {
            // digits
            $('#result').val($('#result').val() + $(this).val())
        } else if (value === '+/-') {
            $('#result').val($('#result').val() * -1)
        } else if (value === '%') {
            $('#result').val($('#result').val()  / 100)
        } else if (value === '=') {
            // result
            equation.push($('#result').val().toLocaleString('fullwide', {useGrouping:false}))
            $.ajax({
                type: 'POST',
                url: $(this).attr('data-url'),
                data: {
                    'csrfmiddlewaretoken': csrf_token,
                    'equation': JSON.stringify(equation)
                },
                success: function (response) {
                    $('#result').val(response)
                    equation = [];
                },
                error: function (response) {
                }
            })
        } else {
            // operators
            equation.push($('#result').val().toLocaleString('fullwide', {useGrouping:false}))
            equation.push(value === 'x' ? '*' : value)
            $('#result').val('')
        }
    })
});