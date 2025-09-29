<?php
    $username = empty($_POST["username"]) ? "Vacio" : $_POST["username"];

    $password = empty($_POST["password"]) ? "Vacio" : $_POST["password"];

    $news = isset($_POST["news"]) ? "Sí" : "No";

    $interests = isset($_POST["interests"]) ? $_POST["interests"] : [];
    
    $gender = isset($_POST["gender"]) ? $_POST["gender"] : "Vacio";

    $country = isset($_POST["country"]) ? $_POST["country"] : "Vacio";;

    echo "Nombre de Usuario: ".$username."<br>";

    echo "Contraseña: ".$password."<br>";

    echo "Acepta noticias: ".$news."<br>";

    echo "Intereses: ";
   foreach ($interests as $interest) {
    echo $interest . " ";
    }

    echo "<br>";

    echo "Genero: ".$gender."<br>";

    echo "Pais: ".$country."<br>";

?>