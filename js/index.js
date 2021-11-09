$(document).ready(function(){

    fLocalEventosClick();

});


function fLocalEventosClick(){

    $("#bGravar").click(function(){

        fLocalComunicaServidor("inserir");
        return false;
    });

    $("#bListar").click(function(){

        fLocalComunicaServidor("listar");
        return false;
    });
}


function fLocalComunicaServidor(arquivo){

    var valores = $("form").serialize();


    $.ajax({

        type:"POST",
        dataType: "json",
        data: valores, 
        url: "php/" + arquivo + ".php",
        success:function(retorno){

            var conteudo = "";

            for(var i = 0; i < retorno.length; i++){

                conteudo += "<tr>"; 
                conteudo += "<td>" + retorno[i]["Nome"] + "</td>";
                conteudo += "<td>" + retorno[i]["Cidade"] + "</td>";
                conteudo += "<td>" + retorno[i]["Idade"] + "</td>";
                conteudo += "<td>" + retorno[i]["Endereco"] + "</td>";
                conteudo += "<td>" + retorno[i]["Email"] + "</td>";
                conteudo += "</tr>";
            }

            $("#tableLista").html(conteudo);

        }

    });

}
