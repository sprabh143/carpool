<?php
$link = mysqli_connect("localhost", "beamuhos_database", "12345678", "beamuhos_database");
if(mysqli_connect_error()){
    die('ERROR: Unable to connect:' . mysqli_connect_error()); 
    echo "<script>window.alert('Hi!')</script>";
}
    ?>