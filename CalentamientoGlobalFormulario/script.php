<?php
    $username = empty(trim($_POST["username"])) ? "Vacio" : $_POST["username"];

    $password = empty(trim($_POST["password"])) ? "Vacio" : $_POST["password"];

    $news = isset($_POST["news"]) ? "Sí" : "No";

    $interests = isset($_POST["interests"]) ? $_POST["interests"] : [];
    
    $gender = isset($_POST["gender"]) ? $_POST["gender"] : "Vacio";

    $country = $_POST["country"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Datos Recibidos</h1>
    </header>

    <?php
        if($username!="Vacio")
            echo "Nombre de Usuario: ".$username."<br>";
        
        if($password!="Vacio")
            echo "Contraseña: ".$password."<br>";

        if($news!="No")
            echo "Acepta noticias: ".$news."<br>";

        if(!empty($interests))
        {
            echo "Intereses: ";
            foreach ($interests as $interest) {
                echo $interest . " ";
            }
        }
        
        if($gender!="Vacio")
            echo "Genero: ".$gender."<br>";

        if($country!="")
            echo "Pais: ".$country."<br>";
    ?>
</body>
</html>