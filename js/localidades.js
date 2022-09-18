$(document).ready(function() {




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
s
// Mudando a opção uf
$('#uf').change(function(e) {
    e.preventDefault();
    $("#Cidade").empty();
    var uf = $('#uf').val();

    if (uf == 'Estados') {
        var option = "<option>Cidades</option>"
        $("#local").append(option)
        return
    }
})