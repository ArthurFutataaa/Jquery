$(document).ready(function(){


    $('#cidade').hide();

    $.ajax({
        type: 'GET',
        dataType: 'json',
        data: {orderBy: "nome"},
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados`,
        success:function(dados) {
            
        }
    });
})