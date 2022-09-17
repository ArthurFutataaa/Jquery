$(document).ready(function() {


    $('#cidade').hide();

    $.ajax({
        type: 'GET',
        dataType: 'json',
        data: { orderBy: "nome" }, // OrderBy: Deixar nomes em ordem
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados`,
        success: function(response) {
            $.each(response, function(indexInArray, valueOfElement) {
                var option = "<option>" + valueOfElement.sigla + "<option>" // criando uma variável contendo a tag HTML
                $("#uf").append(option) // Colocando a variável de HTML dentro da id uf
            })
        }
    })
});

// Mudando a opção uf