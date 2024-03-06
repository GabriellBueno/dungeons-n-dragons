$(document).ready(function () {
    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(__)_____-____'
    })


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email : {
                required : true,
                email : true
            },
            mensagem : {
                required : false
            },
        },
        messages :{
            nome : 'Por Favor, Insira um Nome valido para contato.',
            telefone : 'Por Favor, insira um telefone valido para contato.',
            email : 'Por Favor, insira um email valido para contato.'
        },
        submitHandler : function(form){
            alert('Sua pergunta / Duvida foi colocada na nossa Bag of Holding, mais não se preocupe, nosso Beholder vai avaliar e responder o mais rapido possivel!')
            $('#nome').val('')
            $('#email').val('')
            $('#telefone').val('')
            $('#mensagem').val('')
        },
        invalidHandler : function(any, verificador){
            let campos_incorretos = verificador.numberOfInvalids()
            if(campos_incorretos){
                alert(`Existem ${campos_incorretos} campos invalidos, por favor cheque os dados e tente novamente`)
            }
        }
    })
})