<?php 

if ($_SERVER["REQUEST_METHOD"] != "GET" && !isset($_GET["id"])){
    die("Invalid metod or parameter!");
}
require_once("./db.php");
$query = "SELECT * FROM product WHERE id = ?";
$stmt = mysqli_prepare($connection, $query);
$stmt->bind_param("i", $_GET["id"]);
$stmt ->execute();
$result = $stmt -> get_result();
$item = mysqli_fetch_assoc($result);
header("Content-Type: application/json; charset=utf-8");
if (!$item){
    $error -> message = "Product Not Found";
    http_response_code(404);
   echo json_encode($error);
}else {
    http_response_code(200);
    echo json_encode($item);
}