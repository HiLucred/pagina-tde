<?php

    $nome = $_POST["nome"];
    $cidade = $_POST["cidade"];
    $idade = $_POST["idade"];
    $endereco = $_POST["endereco"];
    $email = $_POST["email"];

    $con = mysqli_connect("localhost:3306", "root", "root", "assinatura");

    mysqli_query($con, "INSERT INTO assinatura_tde (Nome, Cidade, Idade, Endereco, Email)
     VALUES('$nome', '$cidade', '$idade','$endereco','$email') ");




?>