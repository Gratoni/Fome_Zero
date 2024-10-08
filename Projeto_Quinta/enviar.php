<?php
include 'db.php';

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $cnpj = $_POST['cnpj'];
    $telefone = $_POST['telefone'];
    $tipoTelefone = $_POST['tipoTelefone'];
    $senha = password_hash($_POST['senha'], PASSWORD_BCRYPT);
    $mensagem = $_POST['mensagem'];

$sql = "INSERT INTO cadastro (nome, email, cnpj, telefone, tipoTelefone, senha, mensagem) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss", $nome, $email, $cnpj, $telefone, $tipoTelefone, $senha, $mensagem);

if ($stmt->execute()) {
    echo "Cadastro realizado com sucesso!";
    }else {
    echo "Erro: ". $sql ."<br>" . $conn->error;
}

$conn->close();
?>
