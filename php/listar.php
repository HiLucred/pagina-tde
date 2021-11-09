<?php


    $con = mysqli_connect("localhost:3306", "root", "root", "assinatura");

    $resultado = mysqli_query($con, "SELECT * FROM assinatura_tde");

    $i = 0; 

    while($linha = mysqli_fetch_assoc($resultado)){

        $retorno[$i]["Nome"] = $linha["Nome"];
        $retorno[$i]["Cidade"] = $linha["Cidade"];
        $retorno[$i]["Idade"] = $linha["Idade"];
        $retorno[$i]["Endereco"] = $linha["Endereco"];
        $retorno[$i]["Email"] = $linha["Email"];

        $i++;

    }


    echo json_encode($retorno);

?>