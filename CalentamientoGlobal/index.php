<?php
    require 'funciones.php';
    $paises = paises();
    $intereses = intereses();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear Cuenta</title>
   <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header><h1>Crear Cuenta</h1></header>
    <form action="script.php" method="POST">
        <label>Nombre de usuario:</label>
        <input type="text" name="username" >

        <label>Contraseña:</label><br>
        <input type="password" name="password" >


        <div class="boxes">
            <input type="checkbox" name="news">
            ¿Deseas recibir noticas sobre la pagina?
        </div>  


        <span>Intereses:</span>
            <?php
                foreach($intereses as $interes){
                    echo '<div class="boxes">';
                    echo '<input type="checkbox" name="interests[]" value="'."$interes[codigo]".'">';
                    echo "$interes[nombre]";
                    echo "</div>";
                }
            ?>
            
        <span>Género:</span>
        <div class="boxes">
            <input type="radio" name="gender" value="masculino">
            Masculino
        </div>
        <div class="boxes">
            <input type="radio" name="gender" value="femenino">
            Femenino
        </div>
        <div class="boxes">
            <input type="radio" name="gender" value="otro">
            Otro
        </div>

     
        <label>País:</label>
        <select name="country">
            <?php
                foreach($paises as $pais){
                    echo '<option value='."$pais[codigo]".'>'."$pais[nombre]".'</option>';
                }
            ?>
        </select>

        <input type="submit">
    </form>
</body>
</html>