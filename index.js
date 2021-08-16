const inputs = ['.logradouro','.bairro','.localidade','.uf','.ibge','.ddd',];

$(document).ready(function() {
    $('.cep').mask('00000-000', options);
});

var options =  {
    onComplete: function(cep) {
      infoCEP(cep.replace('-',''));
    }
};

function infoCEP(cep){
    loading();
    $.ajax({
        url: "http://localhost:3333/cep",
        data: { cep: cep},
        type: 'GET',
        crossDomain: true,
        success: function (response) {
            setValue(response);
            $(".cep").removeClass('is-invalid');
            $(".cep").addClass('is-valid');
        },
        error: function (response){
            clean();
            console.log(response);
            $(".cep").removeClass('is-valid');
            $(".cep").addClass('is-invalid');
            
        }
    });
    console.log(cep)
}


function loading(){
    for(input of inputs){
        $(input).val("Carregando, Aguarde...");
        $(input).prop('disabled', true);
    }
}

function setValue(values){
 

    $(".logradouro").val(values.logradouro);


    $(".bairro").val(values.bairro);


    $(".localidade").val(values.localidade);


    $(".uf").val(values.uf);


    $(".ibge").val(values.ibge);


    $(".ddd").val(values.ddd);


    
}

function clean(){
    $(".logradouro").val('');

    $(".bairro").val('');

    $(".localidade").val('');

    $(".uf").val('');

    $(".ibge").val('');

    $(".ddd").val('');
}

