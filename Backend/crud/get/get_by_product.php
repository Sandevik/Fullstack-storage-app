<?php 
require_once("./db.php");
if ($_SERVER["REQUEST_METHOD"] != "GET" && !isset($_GET["product"])){
    die("Invalid metod or parameter!");
}

$query = "SELECT * FROM product WHERE title LIKE ? ORDER BY title ASC";
$param = "%".$_GET["product"]."%";
$stmt = mysqli_prepare($connection, $query);
$stmt->bind_param("s", $param);
$stmt ->execute();
$result = $stmt -> get_result();
$item = mysqli_fetch_all($result, MYSQLI_ASSOC);
header("Content-Type: application/json; charset=utf-8");
if (!$item){
    $error -> message = "Product Not Found";
    http_response_code(404);
   echo json_encode($error);
}else {
    http_response_code(200);
    echo json_encode($item);
}