$(document).ready(function(){
    // Selecionar o elemento que iremos monitorar o click
    $('.btn').click(function(e){
        e.preventDefault();
        //Armazenando os dados digitados em variáveis
        var nome = $('#NOME').val()
        var idade = $('#IDADE').val()

        var mensagem = 'Seja bem vindo,  '+nome+' , sua idade é '+idade
        $('#mensagem').append(mensagem)

        //limpar os campos do formulário
        $('#NOME').val('')
        $('#IDADE').val('')

        $('#NOME').focusin(function(){
            $('#mensagem').empty()
        })
        
    })
})

// Resumo de estudos.
// click() --  quando clicar no botão
//preventDefault() -- parar a ação original e começar uma segundária.
// val() -- variável.
//append -- incluir alguma informação / elemento dentro do HTML.
// empty() -- Limpar alguma informação.
// focusin() -- quando está dentro de algo.