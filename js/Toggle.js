$(document).ready(function(){

        $('p').hide()

    //Monitorar o click no botão "read"
    $('#read').click(function(e){
        e.preventDefault()

        $('p').toggle(1500, function(){
            // criar uma variável para receber o status  (This = ultimo elemento clicado/ usado etc.)
            let $status = $('#read').attr('data-status')
            //Limpando o label do btn
            $('#read').empty()
            //testando o status
            if ($status == 1){
                $('#read').append('Esconder Resumo')
                $('#read').attr('data-status', '2')
            }else{
                $('#read').append('Ver Resumo')
                $('#read').attr('data-status', '1')
            }
        })
    })

})