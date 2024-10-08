<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fome_zero";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
